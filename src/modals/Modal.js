import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose, title }) => {
  return ReactDOM.createPortal(
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{title}</p>
          <button className="modal-close is-large" onClick={onClose}></button>
        </header>
        {children}
      </div>
    </div>,
    document.querySelector("#modals")
  );
};

export default Modal;
