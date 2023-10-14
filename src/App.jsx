import './App.css'

import React, { Suspense, useState } from "react";
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience';
import Navbar1 from './components/Navbar'
import Scroller1 from './components/content1/scroller1';
import Scroller2 from './components/content2/scroller2';
import Scroller3 from './components/content3/scroller3';
import Scroller4 from './components/content4/scroller4';






function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="appContainer">

        <div className='navContainer'>
          <Navbar1 />
        </div>

        <div className='contentContainer'>
          <Scroller1 />
          <Scroller2 />
          <Scroller3 />
          <Scroller4 />
        </div>

        <div className='canvasContainer'>
          <Canvas><Suspense fallback={null}>
            <Experience />
          </Suspense></Canvas>
        </div>

      </div>
    </>   
  );
};

export default App
