import React from 'react';
import { useSelector } from 'react-redux';
import {
  markOrderAsProblem,
  markOrderAsReceived,
} from '../services/order.service';
import { selectCurrentOrder } from '../store/order/order.selector';

const OrderDetail = () => {
  const currentOrder = useSelector(selectCurrentOrder());

  const handleOrderReceived = async () => {
    const response = await markOrderAsReceived(currentOrder.id);
    console.log(response);
  };

  const handleOrderProblem = () => {
    const response = markOrderAsProblem(currentOrder.id);
    console.log(response);
  };

  if (!currentOrder) return <>Loading...</>;

  return (
    <>
      <h1>Order Detail</h1>
      <h2>Order: {currentOrder.id}</h2>
      <h3>Order Status: {currentOrder.status}</h3>
      <h3>Order Date: {currentOrder.date}</h3>
      <h3>Order Total: {currentOrder.total}</h3>
      <h3>Order Items: {currentOrder.items}</h3>
      <h3>Order Notes: {currentOrder.notes}</h3>
      <h3>Order Customer: {currentOrder.customer}</h3>
      <h3>Order Shipping: {currentOrder.shipping}</h3>
      <h3>Order Payment: {currentOrder.payment}</h3>
      <h3>Order Fulfillment: {currentOrder.fulfillment}</h3>
      <h3>Order Refunds: {currentOrder.refunds}</h3>
      <h3>Order Discounts: {currentOrder.discounts}</h3>
      <h3>Order Taxes: {currentOrder.taxes}</h3>
      <h3>Order Shipping Address: {currentOrder.shippingAddress}</h3>
      <h3>Order Billing Address: {currentOrder.billingAddress}</h3>
      <h3>Order Shipping Method: {currentOrder.shippingMethod}</h3>

      <button onClick={handleOrderReceived}>Mark Received</button>
      <button onClick={handleOrderProblem}>Mark Problem</button>
    </>
  );
};

export default OrderDetail;
