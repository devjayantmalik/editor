import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { setModalState } from "../store/modals/actions";
import constants from "../store/modals/constants";
import LoginForm from "../forms/LoginForm";

const LoginModal = ({ isVisible, setModalState }) => {
  if (!isVisible) return null;

  const handleModalClose = () => {
    setModalState(constants.LOGIN, false);
  };

  return (
    <Modal onClose={handleModalClose} title="Login via Email">
      <section class="modal-card-body">
        <LoginForm />
      </section>
      <footer class="modal-card-foot">
        <button class="button is-danger" onClick={handleModalClose}>
          Close
        </button>
      </footer>
    </Modal>
  );
};

const mapStateToProps = ({ modals }) => {
  return { isVisible: modals[constants.LOGIN] };
};

export default connect(mapStateToProps, { setModalState })(LoginModal);
