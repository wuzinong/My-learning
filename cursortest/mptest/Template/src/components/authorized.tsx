import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { getGlobalState } from "../stores/state";

const Authorized = (props: any) => {
  // const { children, authority, noMatch } = props;
  // const state = getGlobalState();

  return props.children;

  // const currentAuthority = state?.currentRole || "SU" || {};
  // if (!authority) return children;
  // const _authority = Array.isArray(authority) ? authority : [authority];
  // if (_authority.includes(currentAuthority)) return children;
  // return noMatch;
};

const AuthorizedRoute = ({
  component,
  authority,
  redirectPath,
  ...rest
}: any) => {
  return (
    <Authorized
      authority={authority}
      noMatch={
        <Route
          {...rest}
          render={() => <Redirect to={{ pathname: redirectPath }} />}
        />
      }
    >
      <Route {...rest} component={component} />
    </Authorized>
  );
};
export default AuthorizedRoute;
