import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentOrder } from '../store/order/order.selector';

const Order = () => {
  const dispatch = useDispatch();
  const currentOrder = useSelector(selectCurrentOrder());

  const handleViewDetails = () => {
    dispatch(getOrderDeatilsHubspot(currentOrder.id));
  };

  if (!currentOrder) return <>Loading...</>;

  return (
    <>
      Order: {currentOrder.id}
      <button>View More Details</button>
      <button>Mark Received</button>
      <button>Mark Problem</button>
    </>
  );
};

export default Order;
