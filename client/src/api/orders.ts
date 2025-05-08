import axios from 'axios';

export type OrderPayload = {
  userId: string;
  productId: string;
  quantity: number;
};

export async function createOrder(payload: OrderPayload) {
  const response = await axios.post('/orders', payload);
  return response.data;
}

export async function getOrdersByUser(userId: string) {
  const response = await axios.get(`/orders/${userId}`);
  return response.data;
}
