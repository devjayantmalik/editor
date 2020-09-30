import React from "react";
import { connect } from "react-redux";
import constants from "../../store/modals/constants";
import { setModalState } from "../../store/modals/actions";

const AccountMenu = ({ setModalState }) => {
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
        <a
          href="#"
          className="navbar-item"
          onClick={() => setModalState(constants.LOGIN, true)}
        >
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

export default connect(null, { setModalState })(AccountMenu);
