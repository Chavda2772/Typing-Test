import react, { useState, useEffect } from 'react';

function ContentArea({ inputVal, isWordBreak }) {
  // Variables
  let typingContent =
    'Hello Mahesh Chavda how are you? A quick brown fox jumped over the lazy dog';
  let typingWords = typingContent.split(' ');
  let [wordIndexCount, setWordIndexCount] = useState(0);
  let [correctWord, setCorrectWord] = useState(0);
  let [wrongWord, setWrongWord] = useState(0);

  // Business Logic
  useEffect(() => {
    checkWords();
  }, [inputVal]);

  // Helper functions
  // Input checking
  const checkWords = () => {
    // Word Break
    if (isWordBreak) {
      setWordIndexCount(wordIndexCount + 1);
    }

    // Checking Corrent words
    if (inputVal == typingWords[wordIndexCount]) {
      console.log('Correct word increment');
      setCorrectWord(correctWord + 1);
    }

    // Checking wrongWord
    if (isWordBreak && inputVal.trim() != typingWords[wordIndexCount]) {
      console.log('inputVal word :- ', inputVal);
      console.log('typing Word :- ', typingWords[wordIndexCount]);
      setWrongWord(wrongWord + 1);
    }
    // console.log('Word Index Counter :- ', wordIndexCount);
  };
  // Components
  return (
    <>
      <h1 className='text-base leading-relaxed mt-0 mb-4 text-pink-800'>
        {typingContent}
      </h1>
      <h1>{inputVal}</h1>
      <h1 className='3xl'>{typingWords[wordIndexCount]}</h1>
      <h1>Correct Word :- {correctWord}</h1>
      <h1>Wrong Word :- {wrongWord}</h1>
    </>
  );
}

export default ContentArea;
