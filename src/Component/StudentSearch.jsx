import React from "react";
import 'animate.css';


function StudentSearch() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: `url('college_42b626c32aa4436806a3282d3c6469b5.jpg')` }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-lg w-full text-center  animate__animated animate__fadeInDown animate__slow 2s">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to COEP College</h1>
        <p className="text-lg text-gray-600 mb-6">
          If you want to see the results, go to the Branches section.
        </p>
      
      </div>
    </div>
  );
}

export default StudentSearch;
