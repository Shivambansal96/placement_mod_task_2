import React from 'react';
import { useSelector } from 'react-redux';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = useSelector((state) => state.message);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
