import React from 'react';

const ReviewForm = ({ formData, prevStep, submitForm }) => {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Review & Confirm</h2>
        <div className="mb-4">
          <p className="text-sm"><strong>Name:</strong> {formData.name}</p>
          <p className="text-sm"><strong>Email:</strong> {formData.email}</p>
          <p className="text-sm"><strong>Event:</strong> {formData.event}</p>
        </div>
        <div className="flex justify-between mb-4">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition"
          >
            Back
          </button>
          <button
            onClick={submitForm}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
