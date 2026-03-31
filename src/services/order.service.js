import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BASE_API_URL}/v1/order`;

export function createOrder(order) {
  return axios.post(API_URL, order);
}

export function getOrders() {
  return axios.get(API_URL);
}

export async function getOrderById(orderId) {
  try{
    const {data} = await axios.get(API_URL + '/' + orderId);
    return data;
  }
  catch(error){
    throw error.response;
  }
}

export function updateOrder(orderId, order) {
  return axios.put(API_URL + '/' + orderId, order);
}

export function markOrderAsReceived(orderId) {
  return axios.put(API_URL + '/' + orderId + '/received');
}

export function markOrderAsProblem(orderId) {
  return axios.put(API_URL + '/' + orderId + '/problem');
}
