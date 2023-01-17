import React from 'react';
import { Button, Modal, Radio } from 'antd';
import { useSelector } from 'react-redux';
import { selectCurrentOrder } from '../../store/order/order.selector';
const OrderReceivedModal = ({ open, setOpen }) => {
  const currentOrder = useSelector(selectCurrentOrder);
  console.log('currentOrder', currentOrder);
  console.log('open', open)
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleViewDetails = () => {
    setOpen(false);
  };
  return (
    <Modal
      title="Order Received"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleViewDetails}>
          View More Details
        </Button>,
        <Button
          key="submit"
          type="primary"
          //   loading={loading}
          onClick={handleOk}
        >
          Submit
        </Button>,
      ]}
    >
      <h3>Order Id # {currentOrder?.id}</h3>
      
      <p>Change Order status: </p>
      <Radio.Group
        onChange={(e) => {
          console.log('e', e);
        }}
        buttonStyle="solid"
      >
        <Radio.Button value="received">Mark Received</Radio.Button>
        <Radio.Button value="problem">Mark Problem</Radio.Button>
      </Radio.Group>
    </Modal>
  );
};
export default OrderReceivedModal;
