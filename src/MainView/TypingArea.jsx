import { useState, Component } from 'react';

export default class TypingArea extends Component {
  // State Variables
  constructor() {
    super();
  }
  // let [inputVal, setInputVal] = useState('');

  //Helper functions
  onInputChange = (e) => {
    let inputStateVal = e.target.value;

    if (inputStateVal.endsWith(' ')) {
      e.target.value = '';
    }

    this.props.onTypeChange(inputStateVal);
  };

  render() {
    return (
      <>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          onChange={this.onInputChange}
          autoComplete='off'
        />
      </>
    );
  }
}
