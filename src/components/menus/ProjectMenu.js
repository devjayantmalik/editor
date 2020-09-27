import React from "react";

const ProjectMenu = () => {
  return (
    <>
      <a href="javascript:;" className="navbar-link is-arrowless">
        Project
      </a>

      <div className="navbar-dropdown">
        <a href="javascript:;" className="navbar-item">
          All Projects
        </a>
        <a href="javascript:;" className="navbar-item">
          Dependencies
        </a>
        <hr className="dropdown-divider" />
        <a href="javascript:;" className="navbar-item">
          Programming Language
        </a>
        <a href="javascript:;" className="navbar-item">
          Archive
        </a>
        <hr className="dropdown-divider" />
        <a href="javascript:;" className="navbar-item has-text-danger">
          Delete Project
        </a>
      </div>
    </>
  );
};

export default ProjectMenu;
