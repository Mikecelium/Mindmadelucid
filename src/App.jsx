

import './App.css'


import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience';
import Navbar1 from './components/Navbar'


import { Environment, OrbitControls, Stage } from "@react-three/drei";

import React, { Suspense, useState } from "react";






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar1 />
    <Canvas>

      <Suspense fallback={null}>
        
        
        <Experience />
        
      </Suspense>
     
      
      
    </Canvas>
    </>
  
      
      
    
    
    
  );
};

export default App
