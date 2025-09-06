import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Center, Preload } from "@react-three/drei";
import { Model } from "./Delorean";
import * as THREE from "three";

// This component handles camera initialization and constraints
const CameraController = () => {
  const { camera } = useThree();
  const controlsRef = useRef();

  // Set initial camera position from the screenshot
  useEffect(() => {
    // Set exact values from the screenshot
    camera.position.set(0.0, 1.0, 7.0);
    camera.fov = 70;
    camera.updateProjectionMatrix();
  }, [camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      target={new THREE.Vector3(0.0, -0.5, 0.0)} // Exact target from screenshot
      minDistance={4}
      maxDistance={8}
      minPolarAngle={Math.PI / 4} // Restrict looking too high
      maxPolarAngle={Math.PI / 2 - 0.1} // Prevent going under the model
      enablePan={false} // Disable panning
      enableDamping // Smooth camera movement
      dampingFactor={0.1}
    />
  );
};

// This component contains all the 3D scene elements with locked values
const SceneContent = () => {
  // Exact values from the screenshot
  const modelPosition = [4.0, 16.0, -10.5];
  const modelRotation = [0.0, 0.0, 0.0];
  const modelScale = 1.0;

  // Lighting values from the screenshot
  const ambientIntensity = 0.0;
  const directionalIntensity = 10.0;
  const directionalPosition = [0.5, 5.0, 4.0];

  return (
    <>
      <CameraController />

      {/* --- Locked Lighting Setup --- */}
      <ambientLight intensity={ambientIntensity} />
      <directionalLight
        position={directionalPosition}
        intensity={directionalIntensity}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Suspense fallback={null}>
        <group
          position={modelPosition}
          rotation={[modelRotation[0], modelRotation[1], modelRotation[2]]}
          scale={modelScale}
        >
          <Center>
            <Model />
          </Center>
        </group>
        <Preload all />
      </Suspense>
    </>
  );
};

// The main component that sets up the Canvas
const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas shadows>
        <SceneContent />
      </Canvas>
    </div>
  );
};

export default Scene3D;
