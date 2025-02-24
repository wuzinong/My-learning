import { get } from "../utils/http";

export const getProjectList = () => {
  return get(`/api/list`);
};
