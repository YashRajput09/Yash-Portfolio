import React from 'react';
import Hero from './components/Hero'
import { FloatingNav } from './components/ui/naveBar';
import { FaFile, FaHome } from 'react-icons/fa';
import { BsPersonFillCheck } from "react-icons/bs";
import { FcAbout } from "react-icons/fc"
function App() {
  return (
    <>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="w-full max-w-7xl" >
          < FloatingNav navItems={[
            {name: 'Home', link: '/', icon: < FaHome /> },
            {name: 'About', link: '/', icon: < FcAbout /> },
            {name: 'Project', link: '/', icon: < FaFile /> },
            {name: 'Contect', link: '/', icon: < BsPersonFillCheck /> }
          ]}/>
          <Hero />
        </div>
      </div>
    </>
  );
};

export default App;
