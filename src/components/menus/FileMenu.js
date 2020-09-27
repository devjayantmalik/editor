import React from "react";

const FileMenu = () => {
  return (
    <>
      <div className="navbar-link is-arrowless">File</div>

      <div className="navbar-dropdown">
        <a href="#" rel="noopener" className="navbar-item">
          New File
        </a>
        <a href="javascript:;" className="navbar-item">
          Open
        </a>
        <a href="javascript:;" className="navbar-item">
          Save
        </a>
        <hr className="navbar-divider" />
        <a href="javascript:;" className="navbar-item">
          Export Project
        </a>
        <a href="javascript:;" className="navbar-item">
          Import Project
        </a>
        <hr className="navbar-divider" />
        <a href="javascript:;" className="navbar-item">
          Exit
        </a>
      </div>
    </>
  );
};

export default FileMenu;
