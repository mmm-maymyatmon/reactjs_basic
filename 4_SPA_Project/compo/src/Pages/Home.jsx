import React from 'react';
import reactImg from "../images/react.jpg";
import Nav from '../components/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src={reactImg} 
              alt="React" 
              className="w-full h-auto rounded-lg shadow-xl transform transition-all hover:scale-105" 
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">
              Discover the Power of React
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque iste possimus quod ullam accusamus, a quas vero consectetur dolorum modi neque libero, officia, recusandae temporibus? Fuga rem minus nihil possimus.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
