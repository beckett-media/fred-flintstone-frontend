import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BASE_API_URL}/api/orders`;

export function createOrder(order) {
  return axios.post(API_URL, order);
}

export function getOrders() {
  return axios.get(API_URL);
}

export function getOrderById(orderId) {
  return axios.get(API_URL + '/' + orderId);
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
