/** @format */

import React from "react";
import { Modal } from "antd";

const CheckoutModal = ({ open, setOpen }) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      className='Checkout_Modal'
    >
    <p>Checkout As</p>
    </Modal>
  );
};

export default CheckoutModal;