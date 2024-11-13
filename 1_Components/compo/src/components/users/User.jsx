import React from 'react';
import { HiTrash } from "react-icons/hi";

const User = ({ data, remove }) => {
  const removeBtn = () => {
    remove(data.uuid)
  }
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden my-4 mx-auto p-6 transform transition duration-300 hover:scale-105">
      <div className="flex items-center space-x-4">
        <img className="w-16 h-16 rounded-full border-2 border-gray-300" src={data.image} alt="profile" />
        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-800">{data.name}</p>
          <p className="text-sm text-gray-600">Phone: {data.phone}</p>
        </div>
        <button className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out" onClick={removeBtn}>
          <HiTrash size={24} />
        </button>
      </div>
    </div>
  );
}

export default User;
