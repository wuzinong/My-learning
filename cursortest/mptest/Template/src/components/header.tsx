import React from "react";
import { withRouter } from "react-router-dom";
import VeracityHeader from "@veracity/js-internal/VeracityHeader";
// eslint-disable-next-line no-unused-vars
import { ILink, IUser } from "@veracity/js-internal/VeracityHeader";

const loginUrl = "https://www.veracity.com/auth/login?returnTo=/";
const logoUrl = "https://www.veracity.com/";

const navLinks: ILink[] = [
  {
    name: "Marketplace",
    url: "https://store.veracity.com/?loggedin=1"
  },
  {
    name: "My services",
    url: "https://services.veracity.com/"
  },
  {
    name: "My data",
    url: "https://data.veracity.com/?loggedin=1"
  },
  {
    name: "Support",
    url: "https://services.veracity.com/form/Support"
  }
];

const currentUser: IUser = {
  firstName: "DNV GL",
  lastName: "User",
  displayName: "Unknown",
  company: "DNV GL",
  notifications: 2,
  services: [
    {
      name: "Very Very Very Very Very Long Service Name",
      url: "nowhere"
    }
  ],
  urls: {
    notifications: "https://services.veracity.com/Notifications?loggedin=1",
    settings: "https://services.veracity.com/EditProfile",
    logout: "https://services.veracity.com/Logout"
  }
};

function Header() {
  return (
    <section className="layout-header">
      <VeracityHeader
        logoUrl={logoUrl}
        navLinks={navLinks}
        user={currentUser ? currentUser : loginUrl}
      />
    </section>
  );
}

export default withRouter(Header);
