import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrder } from '../store/order/order.slice';

const Shipping = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispath action to get order with id 1
    // dispatch(fetchOrder(1));
  }, []);
  
  return <div></div>;
};

export default Shipping;
