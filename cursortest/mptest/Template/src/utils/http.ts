import axios from "axios";
import { apiUrl, storageKey } from "../config/config";
import { message, Modal } from "antd";
import Util from "./util";
import { getGlobalState } from "./../stores/state";

const instance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  },
  validateStatus: (status: number) => {
    return status >= 200 && status < 400;
  }
});

let reqList: Array<string> = [];

const allowRequest = (reqList: string[], url: string) => {
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      reqList.splice(i, 1);
      break;
    }
  }
};

instance.interceptors.request.use(
  (config: any) => {
    const state = getGlobalState();
    if (state && state.antiforgery) {
      const antiforgery = state.antiforgery;
      if (antiforgery && antiforgery.header && antiforgery.token) {
        config.headers.common[antiforgery.header] = antiforgery.token;
      }
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: any) => {
    if (response.status >= 200 && response.status < 300) {
      // Check if session timeout. When timeout, it will return login page.
      var data = Util.trim(JSON.stringify(response.data), '"');
      try {
        JSON.parse(data);
      } catch (e) {
        if (data.includes("login.microsoftonline.com")) {
          message.error("Login timeout, redirect to login page");
          window.location.href = "/renew";
        }
      }
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error: any) => {
    if (axios.isCancel(error)) {
      console.log(error.message);
    } else {
      setTimeout(() => {
        allowRequest(reqList, error.config.url);
      }, 1000);

      switch (error && error.response && error.response.status) {
        case 401:
          message.error("Login timeout, redirect to login page");
          window.location.href = "/renew";
          break;
        case 409:
          return Promise.reject(error.response.data);
        default:
          var content;
          if (error.response.data && error.response.data.error) {
            content = error.response.data.error.title;
          } else {
            content = error.toString();
          }
          Modal.error({
            title: "Error",
            content: content,
            cancelButtonProps: {
              style: {
                display: "none"
              }
            }
          });
          if (localStorage.storageKey) {
            localStorage.removeItem(storageKey);
          }
          break;
      }
    }
    return Promise.reject(error);
  }
);

const get = (url: string, params?: any) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, params)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

const post = (url: string, params?: any) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

const put = (url: string, params?: any) => {
  return new Promise((resolve, reject) => {
    instance
      .put(url, params)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

const deleterReq = (url: string, params?: any) => {
  return new Promise((resolve, reject) => {
    instance
      .delete(url, { data: params })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

export { get, post, put, deleterReq };
