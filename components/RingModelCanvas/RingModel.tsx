"use client"
import { Canvas } from '@react-three/fiber'
import Ring01 from './RingGLTF';

import { Suspense } from 'react';
import { OrbitControls, Preload, useGLTF, useProgress } from '@react-three/drei';
import LoadingUI from '../LoadingLogoUI/LoadingUI';
import { Html } from '@react-three/drei';

import {LightScene} from "./lights";

const LoadingFallback = () => {
    const {progress} = useProgress();

    return(
    // load the html UI component and have an area to place it in center in
    <Html className="w-[100px] h-[100px] mt-[-50px] ml-[-50px]
    flex items-center justify-center">
        <LoadingUI progress={progress.toFixed(2)}/>
    </Html>
)
};

const Experience = () => {
    return (
        <group position={[0, 0, 0]} scale={0.03} rotation={[0,0,0]}>
            <Ring01 />
        </group>
    )
}

const RingCanvas = () => {
    return (
        <Canvas
        frameloop='demand'
        shadows
        camera={{position: [0,2,5], fov: 10}}
        gl={{ preserveDrawingBuffer: true}}
        >

        <directionalLight intensity={2} color={"#ffff"} position={[0,0.1,0.1]}/>
        {/* <directionalLight intensity={2} color={"#ffff"} position={[0,-0.1,0]}/> */}
        {/* <hemisphereLight intensity={1} /> */}
        <Suspense fallback={<LoadingFallback />}>
            <OrbitControls enableZoom={true} enablePan={false}
            // maxPolarAngle={Math.PI /2}  //not full rotation / limited
            // minPolarAngle={Math.PI /2}
            />
            
            {/* <LoadingFallback /> */}
            <Experience/>

        </Suspense>

        <Preload all />

        </Canvas>
    )
}

export default RingCanvas;