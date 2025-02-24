import { get } from "../utils/http";

export const getBase = () => {
  return get("/api/Me/base");
};

export const getMeProfile = () => {
  return get("/api/Me/profile");
};

export const getRole = () => {
  return get("/api/Me/role");
};

export const getMessageCount = () => {
  return get("/api/Me/message-count");
};

export const getConfig = () => {
  return get("/config");
};

export const getRenew = () => {
  return get("/renew");
};

export const getLogout = () => {
  return get("/logout");
};
