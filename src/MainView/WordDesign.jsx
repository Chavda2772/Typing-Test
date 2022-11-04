import { useState, useEffect, useRef } from 'react';

function WordDesign(props) {
  // Effects
  useEffect(() => {
    updateCssClasses();
  }, [props.wordIndexCount]);

  // Refs
  const refWordSpan = useRef(null);

  // Helper functions
  function updateCssClasses() {
    let { word, wordIndex, wordIndexCount, inputVal } = props;
    let classes = 'text-xl';

    if (wordIndex == wordIndexCount) {
      classes += ' font-bold';
    } else {
      classes += ' font-light';
    }

    let classArr = classes.split(' ');
    refWordSpan.current.className = '';
    refWordSpan.current.classList?.add(...classArr);
  }

  return (
    <>
      <span ref={refWordSpan}>{props.word}</span>
      <span> </span>
    </>
  );
}
export default WordDesign;
