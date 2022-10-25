import React, { useState } from 'react';

// Components
import ContentArea from './ContentArea';
import Header from './Header';
import TypingArea from './TypingArea';

function MainView() {
  // Store
  const [typingVal, setTypingVal] = useState('');

  // Helper functions
  const onTypingChange = (e) => {
    setTypingVal(e.target.value);
  };

  // Components
  return (
    <>
      <Header />
      <ContentArea inputVal={typingVal} />
      <TypingArea onTypeChange={onTypingChange} />
    </>
  );
}

export default MainView;
