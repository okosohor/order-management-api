import React, { useState } from 'react';
import { OrderForm } from '../components/orderForm.tsx';
import { Table } from '../components/table.tsx';
export function Page() {
  const [activeTab, setActiveTab] = useState<'form' | 'table'>('form');

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 text-gray-800">
      <div className="flex flex-col w-full max-w-md shadow-xl rounded-xl overflow-hidden bg-white">
        <div className="flex">
          <button
            className={`w-1/2 py-3 text-sm font-medium tracking-wide transition-all duration-200 ${
              activeTab === 'form'
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'bg-gray-100 text-gray-500 border-b border-gray-300'
            }`}
            onClick={() => setActiveTab('form')}
          >
            Create Order
          </button>
          <button
            className={`w-1/2 py-3 text-sm font-medium tracking-wide transition-all duration-200 ${
              activeTab === 'table'
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'bg-gray-100 text-gray-500 border-b border-gray-300'
            }`}
            onClick={() => setActiveTab('table')}
          >
            Order List
          </button>
        </div>
        <div className="p-6">
          {activeTab === 'form' ? (
            <OrderForm/>
          ) : (
            <Table/>
          )}
        </div>
      </div>
    </div>
  );
}
