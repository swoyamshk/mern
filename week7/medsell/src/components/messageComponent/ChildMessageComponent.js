// ChildComponent.jsx
import React from 'react';

const ChildMessageComponent = ({ message, updateMessage }) => {
  return (
    <div>
      <p>Current Message: {message}</p>
      {/* Call the updateMessage function when the button is clicked */}
      <button onClick={updateMessage}>Update Message in Child</button>
    </div>
  );
};

export default ChildMessageComponent;
