import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentOrder: null,
  error: null,
  isFetching: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // setCurrentOrder(state, action) {
    //   state.isFetching = false;
    //   state.currentOrder = action.payload;
    // },
    // orderFetchError(state, action) {
    //   state.error = action.payload;
    // },
    // isFetching(state, action) {
    //   state.isFetching = action.payload;
    // },
    // toggleIsFetching(state) {
    //   state.isFetching = !state.isFetching;
    // },
    // fetchOrder(state, _action) {
    //   state.isFetching = true;
    // },
  },
});

export const {
  setCurrentOrder,
  orderFetchError,
  isFetching,
  toggleIsFetching,
  fetchOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
