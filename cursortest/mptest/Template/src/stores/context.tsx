import React from "react";
import Util from "../utils/util";

type StateType = {
  lang: string;
  antiforgery: {
    header: string;
    token: string;
  };
  userInfo: {
    id: string;
    userName: string;
    email: string;
    roles: string[];
    isLoaded: boolean;
    currentRole: string;
  };
};

type ActionType = {
  type: string;
  state: StateType;
};

type StateAndDispatch = {
  state: StateType;
  dispatch?: React.Dispatch<ActionType>;
};

export const UserContext = React.createContext<StateAndDispatch>({
  state: {
    lang: Util.getCulture(),
    antiforgery: {
      header: "",
      token: ""
    },
    userInfo: {
      id: "",
      userName: "User",
      email: "user@dnvgl.com",
      roles: ["admin"],
      currentRole: "admin",
      isLoaded: false
    }
  }
});

export default UserContext;
