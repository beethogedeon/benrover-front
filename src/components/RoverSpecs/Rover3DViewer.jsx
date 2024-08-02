import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Rover3D = () => {
  const canvasRef = useRef(null);

  const toggleFullscreen = () => {
    if (canvasRef.current) {
      if (!document.fullscreenElement) {
        canvasRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const { scene } = useGLTF('/models/rover.glb');

  return (
    <div onClick={toggleFullscreen} style={{ width: '100%', height: '100%' }}>
      <Canvas ref={canvasRef}>
        <OrbitControls />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <pointLight position={[2, 5, 2]} intensity={0.7} distance={10} />
        <spotLight position={[-5, 10, -5]} angle={0.2} penumbra={1} intensity={1} castShadow />
        <primitive object={scene} />
      </Canvas>
    </div>
  );
};

export default Rover3D;

