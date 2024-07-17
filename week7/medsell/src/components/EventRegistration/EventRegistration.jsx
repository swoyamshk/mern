import React, { useState } from 'react';
import UserInfoForm from './UserInfo';
import EventSelectionForm from './EventSelection';
import ReviewForm from './ReviewForm';

const EventRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = () => {
    // Submit form logic
    console.log('Form submitted:', formData);
    alert('Form submitted:', formData);
  };

  return (
    <div>
      {step === 1 && (
        <UserInfoForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <EventSelectionForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <ReviewForm
          formData={formData}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      )}
    </div>
  );
};

export default EventRegistration;
