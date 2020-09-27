import React from "react";

const HelpMenu = () => {
  return (
    <>
      <a href="javascript:;" className="navbar-link is-arrowless">
        Help
      </a>

      <div className="navbar-dropdown">
        <a href="javascript:;" className="navbar-item">
          About Editor
        </a>
        <a href="javascript:;" className="navbar-item">
          Our Organisation
        </a>
        <a href="javascript:;" className="navbar-item">
          Donate Us
        </a>
      </div>
    </>
  );
};

export default HelpMenu;
