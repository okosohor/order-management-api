import React, { useState } from 'react';
import { getOrdersByUser } from '../api/orders.ts';

export function Table() {
  const [orders, setOrders] = useState<any[]>([]);
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

  const fetchOrders = async () => {
    try {
      const data = await getOrdersByUser(userId);
      setOrders(data);
      setError('');
    } catch (err: any) {
      setOrders([]);
      setError(err.response?.data?.error || 'Could not fetch orders');
    }
  };

  return (
    <div className="space-y-4 text-sm">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="flex-1 px-4 py-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchOrders}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Load Orders
        </button>
      </div>
      {error && <div className="text-red-600">{error}</div>}
      {orders.length > 0 && (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border-b">Product</th>
              <th className="p-2 border-b">Quantity</th>
              <th className="p-2 border-b">Total</th>
              <th className="p-2 border-b">Created</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-2 border-b">{order.Product?.name}</td>
                <td className="p-2 border-b">{order.quantity}</td>
                <td className="p-2 border-b">${order.totalPrice}</td>
                <td className="p-2 border-b">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
