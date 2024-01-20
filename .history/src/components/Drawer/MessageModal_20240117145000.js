/** @format */

import React from "react";
import { Modal } from "antd";

const MessageModal = ({ open, setOpen, msg }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className="Checkout_Modal Cancel_Modal"
    >
      <img src="./Image/download-removebg-preview.png" alt="" />
      <h6> {msg} </h6>
      <p>Do you want to delete previous selected package of this sevice </p>
      <div className="container_but">
        <button className="cancel" onClick={() => setOpen(false)}>
          Cancel
        </button>
        <button className="delete" onClick={deleteFunc}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default MessageModal;