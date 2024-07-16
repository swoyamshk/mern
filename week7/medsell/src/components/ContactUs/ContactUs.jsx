// src/ContactUs.js
import React from 'react';
import contactUsImage from './o.jpg'; // Import the image

const ContactUs = () => {
  return (
    <div className="mt-20 min-h-screen flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:mr-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <img
          src={contactUsImage}
          alt="Contact Us"
          className="w-full max-w-xs mt-6 md:mt-0"
        />
      </div>
    </div>
  );
}

export default ContactUs;
