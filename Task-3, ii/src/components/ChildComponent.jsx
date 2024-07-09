import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/actions';

const ChildComponent = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch(setMessage(input));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send Message</button>
    </div>
  );
};

export default ChildComponent;
