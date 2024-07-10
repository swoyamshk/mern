// ParentComponent.jsx
import React, { useState } from 'react';
import ChildMessageComponent from './ChildMessageComponent';

const ParentMessageComponent = () => {
  // Initialize state with a default message
  const [message, setMessage] = useState('Hello, World!');

  // Function to update the message state
  const updateMessage = () => {
    setMessage('The message has been updated!');
  };

  return (
    <div  className='mb-5 ml-5'>
      <ChildMessageComponent message={message} updateMessage={updateMessage} />
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default ParentMessageComponent;
