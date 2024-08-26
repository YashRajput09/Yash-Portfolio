import React from 'react';
import Hero from './components/Hero'
function App() {
  return (
    <>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="w-full max-w-7xl" >
          <h1> Testing </h1>
          <Hero />
        </div>
      </div>
    </>
  );
};

export default App;
