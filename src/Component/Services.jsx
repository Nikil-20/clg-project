// src/services.jsx
import React from "react";
import 'animate.css';


function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 mb-8 animate__animated animate__slideInDown animate__slow 2s">
        <div className="relative mb-6">
          <img
            src="https://www.coep.org.in/page_assets/190/coep.jpeg"
            alt="CoEP Campus"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Campus Life & Activities
        </h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">MindSpark</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MindSpark is the annual technical festival of the college organized by the students. It is one of the biggest technical festivals in the country.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Zest</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              With more than 70 colleges participating, Zest is one of the biggest sports fests in the country and the annual sports festival of CoEP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Regatta</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The 88-year long tradition of the college, Regatta, continues to draw huge crowds. It is an annual show where students demonstrate the use of various boats such as kayaks, sculls, etc.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Annual Social Gathering</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Students get a chance to showcase their cultural skills—be it acting, singing, or dancing—in the Annual Social Gathering, an intra-institute cultural festival.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Drama Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The college is famous for its drama team as well as its ‘Street play’ and ‘Mad Ads’ team, which has won many national-level competitions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Abhiyanta</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The college magazine, Abhiyanta, is published every year, with each edition focusing on a particular department of the college.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Services;
