import React from "react";
import Image from "./Image";
import logo from "../assets/images/logo-light.svg";
import {
  AccountMenu,
  EditMenu,
  FileMenu,
  ProjectMenu,
  ViewMenu,
  HelpMenu,
} from "./menus";

const EditorMenu = () => {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <Image src={logo} height="40" width="40" />
        </div>

        <div
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className="navbar-menu">
        <ul className="navbar-start">
          <li className="navbar-item has-dropdown is-hoverable">
            <FileMenu />
          </li>

          <li className="navbar-item has-dropdown is-hoverable">
            <EditMenu />
          </li>

          <li className="navbar-item has-dropdown is-hoverable">
            <ViewMenu />
          </li>

          <li className="navbar-item has-dropdown is-hoverable">
            <ProjectMenu />
          </li>

          <li className="navbar-item has-dropdown is-hoverable">
            <AccountMenu />
          </li>
          <li className="navbar-item has-dropdown is-hoverable">
            <HelpMenu />
          </li>
        </ul>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary is-small">
                <strong>Sign up</strong>
              </button>
              <button className="button is-small is-light"> Log in</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EditorMenu;
