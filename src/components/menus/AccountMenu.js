import React from "react";

const AccountMenu = () => {
  return (
    <>
      <a href="javascript:;" className="navbar-link is-arrowless">
        Account
      </a>

      <div className="navbar-dropdown">
        <a href="javascript:;" className="navbar-item">
          Connect Github
        </a>
        <a href="javascript:;" className="navbar-item">
          Connect Google
        </a>
        <hr className="dropdown-divider" />
        <a href="javascript:;" className="navbar-item">
          Login via Email
        </a>
        <a href="javascript:;" className="navbar-item">
          Register new Account
        </a>
        <hr className="dropdown-divider" />
        <a href="javascript:;" className="navbar-item">
          Manage Profile
        </a>
        <a href="javascript:;" className="navbar-item">
          Reset Password
        </a>
      </div>
    </>
  );
};

export default AccountMenu;
