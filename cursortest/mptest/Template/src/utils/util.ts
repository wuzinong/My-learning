import { dnvglInsightKey } from "../config/config";

export default class Util {
  parseDomainFromMail(mail: string) {
    if (mail == null) return "";
    return mail.split("@")[1].split(".")[0].toUpperCase();
  }

  isDnvglMail(mail: string) {
    return this.parseDomainFromMail(mail) === "DNVGL";
  }

  getSignature(user: any) {
    if (this.isDnvglMail(user.mailAddress) && user.veritId) {
      return "VERTIT\\" + user.veritId;
    }

    return user.mailAddress;
  }

  randomString(len: number, charSet: string) {
    charSet =
      charSet ||
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomString = "";
    for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }

  getRandomString() {
    return this.randomString(5, "abcdefghijklmnopqrstuvwxyz0123456789");
  }

  // get cookie
  static getCookie(key: string) {
    const name = key + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  static toCurrency = (n: any, curr: string, LanguageFormat: any) => {
    return Intl.NumberFormat(LanguageFormat, {
      style: "currency",
      currency: curr,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(n);
  };

  // set cookie,default is 30 days
  static setCookie(key: string, value: string) {
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + "; " + expires;
  }

  static setCulture(val: string) {
    if (val === "zh")
      this.setCookie(".AspNetCore.Culture", "c=zh-CN|uic=zh-CN");
    else this.setCookie(".AspNetCore.Culture", "c=en-US|uic=en-US");
  }

  static getCulture() {
    let val = this.getCookie(".AspNetCore.Culture");
    if (val === "") {
      return navigator.language.includes("zh") ? "zh" : "en";
    } else if (val.indexOf("zh-CN") > 0) {
      return "zh";
    }

    return "en";
  }

  static getAppInsightKey(): string {
    let val = this.getCookie("aikey");
    return val ? val : dnvglInsightKey;
  }

  static clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\\=)/g);
    if (keys) {
      for (var i = keys.length; i--; )
        document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString();
    }
  }

  static contactParams(o: any) {
    var arr: string[] = [];
    Object.keys(o).forEach((key) => {
      arr.push(`${key}=${o[key]}`);
    });
    return "?" + arr.join("&");
  }

  static convertCollection(
    origin: any[],
    param: { key: string; value: string } = { key: "key", value: "value" }
  ): any[] {
    console.log(param);
    return origin.map((item) => {
      var obj: any = {};
      obj[item.key] = item.value;
      return obj;
    });
  }

  revertCollection(
    origin: any[],
    param: { key: string; value: string } = { key: "key", value: "value" }
  ): any[] {
    console.log(param);
    return origin;
  }

  static trim(s: string, c: string) {
    if (c === "]") c = "\\]";
    if (c === "\\") c = "\\\\";
    return s.replace(new RegExp("^[" + c + "]+|[" + c + "]+$", "g"), "");
  }
}
