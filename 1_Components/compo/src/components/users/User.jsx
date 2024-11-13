import React from 'react';
import { HiTrash } from "react-icons/hi";

const User = ({ data, remove }) => {
  const removeBtn = () => {
    remove(data.uuid);
  };

  return (
    <div className="w-[320px] bg-white rounded-lg shadow-lg overflow-hidden my-4 mx-auto p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 object-cover rounded-full border-2 border-indigo-300"
          src={data.image}
          alt="profile"
        />
        <div className="flex-1">
          <p className="text-lg font-semibold text-indigo-700">{data.name}</p>
          <p className="text-sm text-gray-500">Phone: {data.phone}</p>
        </div>
        <button
          className="text-red-500 hover:bg-red-100 p-2 rounded-full transition duration-200 ease-in-out"
          onClick={removeBtn}
        >
          <HiTrash size={24} />
        </button>
      </div>
    </div>
  );
};

export default User;
