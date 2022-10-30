import React, { useState } from 'react';

function TypingArea({ onTypeChange }) {
  // State Variables
  let [inputVal, setInputVal] = useState('');

  //Helper functions
  function onInputChange(e) {
    let breakWord = false;
    let inputStateVal = e.target.value;

    if (inputStateVal.endsWith(' ')) {
      breakWord = true;
      e.target.value = '';
    }

    onTypeChange(inputStateVal, breakWord);
    if (inputStateVal.endsWith(' ')) setInputVal('');
  }

  return (
    <>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type='text'
        onChange={onInputChange}
        autoComplete='off'
        // value={inputVal}
      ></input>
      <button>Show : {inputVal}</button>
    </>
  );
}

export default TypingArea;
