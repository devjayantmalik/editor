import React from "react";
import Image from "./Image";
import logo from "../assets/images/logo-light.svg";

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
            <div className="navbar-link is-arrowless">File</div>

            <div className="navbar-dropdown">
              <a href="javascript;" rel="noopener" className="navbar-item">
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
          </li>

          <li className="navbar-item has-dropdown is-hoverable">
            <a href="javascript:;" className="navbar-link is-arrowless">
              Edit
            </a>

            <div className="navbar-dropdown">
              <a href="javascript:;" className="navbar-item">
                Font
              </a>
              <a href="javascript:;" className="navbar-item">
                Line Numbers
              </a>
            </div>
          </li>

          <li className="navbar-item has-dropdown is-hoverable">
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
          </li>

          <li className="navbar-item has-dropdown is-hoverable">
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
          </li>

          <li className="navbar-item has-dropdown is-hoverable">
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
          </li>
          <li className="navbar-item has-dropdown is-hoverable">
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