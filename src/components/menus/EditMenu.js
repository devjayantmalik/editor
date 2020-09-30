import React from "react";

const EditMenu = () => {
  return (
    <>
      <a href="#" className="navbar-link is-arrowless">
        Edit
      </a>

      <div className="navbar-dropdown">
        <a href="#" className="navbar-item">
          Font
        </a>
        <a href="javascript:;" className="navbar-item">
          Line Numbers
        </a>
      </div>
    </>
  );
};

export default EditMenu;
