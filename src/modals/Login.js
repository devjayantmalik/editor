import React, { useState } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { setModalState } from "../store/modals/actions";
import constants from "../store/modals/constants";

const LoginModal = ({ isVisible, setModalState }) => {
  if (!isVisible) return null;

  return (
    <Modal
      onClose={() => setModalState(constants.LOGIN, false)}
      title="Login via Email"
    >
      <section class="modal-card-body">
        <h1>Hello Modal</h1>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </Modal>
  );
};

const mapStateToProps = ({ modals }) => {
  return { isVisible: modals[constants.LOGIN] };
};

export default connect(mapStateToProps, { setModalState })(LoginModal);
