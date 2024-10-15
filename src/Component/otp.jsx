import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'animate.css';

const OtpPage = () => {
  const location = useLocation(); // Access the passed state from login
  const navigate = useNavigate();
  const [enteredOtp, setEnteredOtp] = useState('');
  const { otp } = location.state || {}; // Get the OTP passed from the login page

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredOtp === otp) {
      alert('OTP Verified Successfully');
      navigate('/Results'); // Redirect to dashboard after successful OTP verification
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('college_42b626c32aa4436806a3282d3c6469b5.jpg')" }}>
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg animate__animated animate__fadeInDown animate__slow 2s" style={{ width: '400px' }}>
        <h2 className="text-2xl font-bold mb-5 text-center">Enter OTP</h2>
        <p className="text-center mb-4">Enter the OTP sent to your account.</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
            placeholder="Enter OTP"
            className=" w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
          />
          <div className='flex items-center justify-center'>
          <button
            type="submit"
            className="bg-green-500  text-white px-6 py-2 rounded-lg "
          >
            Verify OTP
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
