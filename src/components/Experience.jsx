import { ReactThreeFiber } from "@react-three/fiber";

import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Island } from "./Island";
import { Skybox } from "./Skybox";
import NeuralNetwork from "./NeuralNetwork";
import NeuralNetworks from "./NeuralNetworks";
import Header from "./Header";
//<Island />

export const Experience = () => {

    return(
        
        <>
        
        <ambientLight intensity = {1} />
        <OrbitControls enableZoom />
        <ScrollControls pages={3} damping ={0.25}>
    
        <Skybox />
        
        <NeuralNetwork />
        
           
        
        </ScrollControls>
        </>
    );
}