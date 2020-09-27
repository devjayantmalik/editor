import React from "react";

const ViewMenu = () => {
  return (
    <>
      <a href="javascript:;" className="navbar-link is-arrowless">
        View
      </a>

      <div className="navbar-dropdown">
        <a href="javascript:;" className="navbar-item">
          Full Screen
        </a>
        <hr className="dropdown-divider" />
        <a href="javascript:;" className="navbar-item">
          Files Pane
        </a>
        <a href="javascript:;" className="navbar-item">
          Output Pane
        </a>
      </div>
    </>
  );
};

export default ViewMenu;
