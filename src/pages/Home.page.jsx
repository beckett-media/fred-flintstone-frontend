import React, { useEffect } from 'react';
import { notification } from 'antd';
import OrderReceivedModal from '../components/Modals/OrderReceivedModal.modal';
import ProblemSubmissionModal from '../components/Modals/ProblemSubmissionModal.modal';
import { getOrderById } from '../services/order.service';
import { setCurrentOrder, toggleIsFetching } from '../store/order/order.slice';
import { selectIsFetching } from '../store/order/order.selector';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const isFetching = useSelector(selectIsFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        // dispatch(toggleIsFetching());
        const { data } = await getOrderById('63b3d86aece39837e06cb61c');
        dispatch(setCurrentOrder(data));
        setOpen(true);
      } catch (e) {
        // toggleIsFetching();
        notification.open({
          type: 'error',
          message: 'Error',
          description: e.data.message || 'Unknown Error Contact Dev Team',
        });
      }
    };
    // fetchOrderDetails();
  }, []);

  return (
    <>
      <h2>Scan Order</h2>
      {isFetching && <p>Loading...</p>}
      <OrderReceivedModal open={open} setOpen={setOpen} />
      <ProblemSubmissionModal open={open2} setOpen={setOpen2} />
    </>
  );
};

export default Home;
