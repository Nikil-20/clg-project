// src/about.jsx
import React from "react";
import 'animate.css';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 mb-8 animate__animated animate__slideInDown animate__slow 2s">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 md:mb-6">
          About College of Engineering, Pune (CoEP)
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
          Chartered in 1854, College of Engineering, Pune (CoEP) is a nationally respected leader in technical education. The institute is distinguished by its commitment to finding solutions to the great predicaments of the day through advanced technology. CoEP has a rich history and dedication to the pursuit of excellence.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
          CoEP offers a unique learning experience across a spectrum of academic and social experiences. With a firm footing in truth and humanity, the institute gives you an understanding of both technical developments and the ethics that go with it. The curriculum is designed to enhance your academic experience through opportunities like internships, study abroad programmes, and research facilities.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          The hallmark of CoEP education is its strong and widespread alumni network, support of the industry, and the camaraderie that the institute shares with several foreign universities. Consistently ranked amongst the top 20 technical colleges in India, CoEP's alumni have contributed a lion’s share in the development of national infrastructure.
        </p>
      </div>
    </div>
  );
}

export default About;
