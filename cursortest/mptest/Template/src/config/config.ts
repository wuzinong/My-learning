import { NODE_ENV, REACT_APP_SECRET_ENV } from "./env";

export const isDev = NODE_ENV === "development";
export const isMVP = REACT_APP_SECRET_ENV === "MVP";
export const baseUrl = process.env.REACT_APP_BASE_URL;
export const apiUrl = process.env.REACT_APP_API_URL;
export const storageKey = "dnvgl.token";
export const appVersion = process.env.REACT_APP_VERSION;
export const dnvglInsightKey = "a21ddd3c-22e4-4b73-a3e9-1cc93adde3fb";
export const isUseVeractiyComponent = false;
