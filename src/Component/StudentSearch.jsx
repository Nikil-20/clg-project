import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'animate.css';

const Login = () => {
  const navigate = useNavigate();

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  // Initial values for the form fields
  const initialValues = {
    username: '',
    password: '',
    remember: false,
  };

  // Function to generate a random 6-digit OTP
  const generateRandomOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Random 6-digit number
  };

  // Handle form submission
  const onSubmit = (values) => {
    const otp = generateRandomOtp(); // Generate the random OTP
    alert(`Your OTP is: ${otp}`); // Display OTP in an alert

    // After displaying the OTP, navigate to the OTP page and pass the username and OTP
    navigate('/otp', { state: { username: values.username, otp } });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('http://portal.coep.org.in:9093/content/img/college_42b626c32aa4436806a3282d3c6469b5.jpg')" }}>
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg border-2 border-gray-400 animate__animated animate__fadeInDown animate__slow 2s" style={{ width: '500px' }}>
        <h1 className="text-3xl font-bold text-center mb-3">COEP Technological University</h1>
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="flex justify-between items-center mb-4">
                <label htmlFor="username" className="block font-semibold mb-2 mr-4">UserName</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="UserName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="flex justify-between items-center mb-4">
                <label htmlFor="password" className="block font-semibold mb-2 mr-4">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="flex items-center justify-center mb-4">
                <Field type="checkbox" id="remember" name="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>

              <div className="flex justify-center mb-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 text-white px-6 py-1 rounded-lg mr-2"
                >
                  Sign in
                </button>
                <button
                  type="reset"
                  className="bg-yellow-500 text-white px-6 py-1 rounded-lg ml-2"
                >
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="flex justify-between text-sm mb-4">
          <a href="#" className="text-blue-500">New User</a>
          <a href="#" className="text-blue-500">Forgot Password</a>
        </div>

        <p className="text-center text-red-500 font-semibold">
          If you want to see the result, login here
        </p>

      </div>
    </div>
  );
};

export default Login;
