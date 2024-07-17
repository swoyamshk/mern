import React from 'react';

const EventSelectionForm = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center h-96 ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Select Event</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Event</label>
          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
          >
            <option value="">Select an event</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="art">Art</option>
            <option value="literature">Literature</option>
          </select>
        </div>
        <div className="flex justify-between mb-4">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Next
          </button>
        </div>
        <div className="mb-4">
          <p className="text-sm"><strong>Name:</strong> {formData.name}</p>
          <p className="text-sm"><strong>Email:</strong> {formData.email}</p>
          <p className="text-sm"><strong>Event:</strong> {formData.event}</p>
        </div>
      </div>
    </div>
  );
};

export default EventSelectionForm;
