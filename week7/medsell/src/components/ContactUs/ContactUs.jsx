// src/ContactUs.js
import React,{ useState } from 'react';
import contactUsImage from './o.jpg'; // Import the image

const ContactUs = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "", message:'' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) {
        tempErrors.name = "Name is required"
    };
    if (!formValues.message) {
      tempErrors.message = "Message is required"
  };
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      // handle form submission
    }
  };
  return (
    <div className="mt-20 min-h-screen flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg md:mr-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}  className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name='name'
                value={formValues.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name='email'
                value={formValues.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name='message'
                rows="4"
                value={formValues.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {errors.message && <p>{errors.message}</p>}
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
          className="w-full max-w-lg mt-6 hidden md:block"
        />
      </div>
    </div>
  );
}

export default ContactUs;
