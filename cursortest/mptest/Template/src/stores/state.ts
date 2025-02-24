let globalState: any = null;

export const getGlobalState = () => {
  return globalState;
};

export const setGlobalState = (state: any) => {
  globalState = state;
};
