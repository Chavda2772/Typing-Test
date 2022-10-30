import React, { useState } from 'react';

// Components
import ContentArea from './ContentArea';
import Header from './Header';
import TypingArea from './TypingArea';

function MainView() {
  // Store
  const [typingVal, setTypingVal] = useState('');
  const [isWordBreak, setIsWordBreak] = useState(false);

  // Helper functions
  const onTypingChange = (typingVal, isWordBreak) => {
    setTypingVal(typingVal);
    setIsWordBreak(isWordBreak);
  };

  // Components
  return (
    <>
      <Header />
      <ContentArea inputVal={typingVal} isWordBreak={isWordBreak} />
      <TypingArea onTypeChange={onTypingChange} />
    </>
  );
}

export default MainView;
