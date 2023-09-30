import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Island(props) {
  const { nodes, materials } = useGLTF('./models/island_-_low_poly.glb');
  const ref = useRef();
  const tl = useRef();
  

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

  }, [])


  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -2.605]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.004']} />
      </group>
      <group scale={[0.901, 0.743, 0.901]}>
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.004']} />
      </group>
      <mesh geometry={nodes.Object_12.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_14.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Object_15.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Object_16.geometry} material={materials['Material.007']} />
    </group>
  );
}

useGLTF.preload('./models/island_-_low_poly.glb');
