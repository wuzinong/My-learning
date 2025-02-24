import React, { useReducer, useContext } from "react";
import GlobalContext, { UserContext } from "./context";

export const UPDATE_LANG = "UPDATE_LANG";
export const UPDATE_ANTIFORGERY = "UPDATE_ANTIFORGERY";
export const UPDATE_CURRENTUSER = "UPDATE_CURRENTUSER";
export const UPDATE_NOTIFICATIONS = "UPDATE_NOTIFICATIONS";
export const UPDATE_VIEWAS = "UPDATE_VIEWAS";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_LANG:
      return { ...state, lang: action.state.lang };
    case UPDATE_ANTIFORGERY:
      return {
        ...state,
        antiforgery: action.state.antiforgery,
        environment: action.state.environment,
        templates: action.state.templates,
        year: action.state.year
      };
    case UPDATE_CURRENTUSER:
      return { ...state, userInfo: action.state.userInfo };
    case UPDATE_NOTIFICATIONS:
      return { ...state, isUpdated: { notifications: true } };
    case UPDATE_VIEWAS:
      return { ...state, viewAs: action.state.viewAs };
    default:
      return state;
  }
};

export default function Povider(props: any) {
  const context: any = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, context.state);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
