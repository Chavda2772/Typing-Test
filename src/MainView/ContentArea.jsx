import { useState, useEffect } from 'react';
import WordDesign from './WordDesign';

function ContentArea({ inputVal }) {
  // Variables
  let [typingContent, setTypingContent] = useState('');
  let [wordIndexCount, setWordIndexCount] = useState(0);
  let [correctWord, setCorrectWord] = useState(0);
  let [wrongWord, setWrongWord] = useState(0);
  let [showResult, setShowResult] = useState(false);
  let [typingWords, setTypingWords] = useState([]);
  let isWordBreak = false;

  // Watch Effect
  useEffect(() => {
    setTypingContent('Lorem Ipsum is simply dummy');
  }, []);

  useEffect(() => {
    setTypingWords(typingContent.split(' '));
  }, [typingContent]);

  useEffect(() => {
    showTypingResult();
    checkForWordBreak();
    checkInputWords();
  }, [inputVal]);

  // Helper functions
  function checkForWordBreak() {
    isWordBreak = false;
    if (inputVal.endsWith(' ')) isWordBreak = true;
  }

  function checkInputWords() {
    let trimInputVal = inputVal.trim();

    // Blank Word validation
    if (!trimInputVal) return false;

    // End result
    if (!typingWords[wordIndexCount]) {
      setShowResult(true);
      return false;
    }

    // Checking Corrent words
    if (isWordBreak && trimInputVal == typingWords[wordIndexCount]) {
      setCorrectWord(correctWord + 1);
      IncrementWordIndex();
    }

    // Checking wrongWord
    if (isWordBreak && trimInputVal != typingWords[wordIndexCount]) {
      setWrongWord(wrongWord + 1);
      IncrementWordIndex();
    }

    // End Result show
    if (wordIndexCount >= typingWords.length) {
      setShowResult(true);
    }
  }

  function IncrementWordIndex() {
    setWordIndexCount(wordIndexCount + 1);
  }

  function showTypingResult() {
    if (wordIndexCount >= typingWords.length) {
      setShowResult(true);
    }
  }

  // Components
  return (
    <>
      <div className='container mx-auto'>
        {typingWords.map((word, i) => {
          return (
            <WordDesign
              key={i}
              word={word}
              wordIndex={i}
              wordIndexCount={wordIndexCount}
              inputVal={inputVal}
            />
          );
        })}
      </div>
      {showResult ? (
        <>
          <h1>Correct Word :- {correctWord}</h1>
          <h1>Wrong Word :- {wrongWord}</h1>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default ContentArea;
