import '../Style/AnimatedApp.css';

function CodePenMainView() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl'>
        <div className='text-center'>
          <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
              <span className='countdown font-mono '>
                <span className='text-5xl'>45</span>sec
              </span>
            </div>
            <div className='max-w-6xl max-h-32 overflow-x-hidden mb-6 font-sans text-gray-900 font-normal text-3xl'>
              <span>quick </span>
              <span className='text-red-600'>brown </span>
              <span>fox </span>
              <span className='text-red-600'>jumps </span>
              <span>over </span>
              <span>random </span>
              <span>over </span>
              <span>jumps </span>
              <span className='text-green-600'>over </span>
              <span className='bg-gray-300 rounded-md mt-2'>random </span>
              <span>word </span>
              <span>hello </span>
              <span>hii </span>
              <span>kem </span>
              <span>cho </span>
              <span>quick </span>
              <span>brown </span>
              <span>fox </span>
              <span>jumps </span>
              <span>over </span>
              <span>random </span>
              <span>over </span>
              <span>jumps </span>
              <span>over </span>
              <span>quick </span>
              <span>brown </span>
              <span>fox </span>
              <span>jumps </span>
              <span>over </span>
              <span>random </span>
              <span>over </span>
              <span>jumps </span>
              <span>over </span>
              <span>quick </span>
              <span>brown </span>
              <span>fox </span>
              <span>jumps </span>
              <span>over </span>
              <span className='text-green-600'>random </span>
              <span>over </span>
              <span>jumps </span>
              <span>over </span>
            </div>
          </div>
          <div className='flex flex-row-reverse items-center w-full mb-4 md:flex-row md:px-16'>
            <input
              type='text'
              className='flex-grow w-full h-12 px-4 mb-3 text-xl transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
            />
          </div>
          <button className='bg-gray-400 p-4 rounded-md hover:bg-red-500 hover:text-white active:scale-95'>
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodePenMainView;
