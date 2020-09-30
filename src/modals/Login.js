import React, { useState } from "react";
import Modal from "./Modal";

const LoginModal = () => {
  const [open, setIsOpen] = useState(false);

  if (!open) return null;

  return (
    <Modal onClose={() => setIsOpen(false)}>
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

export default LoginModal;
