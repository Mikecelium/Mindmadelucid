

import { OrbitControls, ScrollControls } from "@react-three/drei";

import { Skybox } from "./Skybox";
import NeuralNetwork from "./NeuralNetwork";


//<Island />

export const Experience = () => {

    return(
        
        <>
        <ambientLight intensity = {9} />
        <OrbitControls enableZoom = {false} />
        <ScrollControls pages={3} damping ={0.25}>
    
        
        <Skybox />
        
        
        <NeuralNetwork />

        
           
        
        </ScrollControls>
        </>
    );
}