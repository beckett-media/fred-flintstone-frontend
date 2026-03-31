import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  fetchOrder,
  setCurrentOrder,
  orderFetchError,
  toggleIsFetching,
} from './order.slice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: fetchOrder,
  effect: (action, listnerApi) => {
    console.log('inside listener action', action);
    const { dispatch } = listnerApi;
    fetch(`https://jsonplaceholder.typicode.com/todos/${action.payload}`)
      .then((response) => response.json())
      .then((json) => {
        // dispatch(setCurrentOrder(json));
        // dispatch(toggleIsFetching());
      })
      .catch((error) => {
        // dispatch(orderFetchError(error));
        // dispatch(toggleIsFetching());
      });
  },
});

export default listenerMiddleware;
