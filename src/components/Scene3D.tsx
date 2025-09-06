import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Center, Preload } from "@react-three/drei";
import { Model } from "./Delorean";
import * as THREE from "three";
import gsap from "gsap";
import RetroLoader from "./RetroLoader";

// This component handles camera animation with GSAP
const CameraAnimator = () => {
  const { camera } = useThree();
  const initialCameraPos = useRef(new THREE.Vector3(0.0, 1.0, 7.0));
  const animationTimeline = useRef<gsap.core.Timeline | null>(null);

  // Set up camera and animations
  useEffect(() => {
    // Set initial position
    camera.position.copy(initialCameraPos.current);

    // Set camera FOV
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = 70;
      camera.updateProjectionMatrix();
    }

    // Create GSAP animation timeline for smooth camera movement
    const tl = gsap.timeline({
      repeat: -1, // Infinite repeat
      repeatDelay: 2, // 2 second pause between animations
    });

    // Boomerang animation - look left
    tl.to(camera.position, {
      x: -0.8,
      duration: 4,
      ease: "power1.inOut",
      onUpdate: () => camera.lookAt(new THREE.Vector3(0, -0.5, 0)),
    });

    // Return to center
    tl.to(camera.position, {
      x: 0,
      duration: 3,
      ease: "power1.inOut",
      onUpdate: () => camera.lookAt(new THREE.Vector3(0, -0.5, 0)),
    });

    // Look right
    tl.to(camera.position, {
      x: 0.8,
      duration: 4,
      ease: "power1.inOut",
      onUpdate: () => camera.lookAt(new THREE.Vector3(0, -0.5, 0)),
    });

    // Return to center again
    tl.to(camera.position, {
      x: 0,
      duration: 3,
      ease: "power1.inOut",
      onUpdate: () => camera.lookAt(new THREE.Vector3(0, -0.5, 0)),
    });

    // Small bobbing up and down motion
    tl.to(camera.position, {
      y: 1.2,
      duration: 2,
      ease: "sine.inOut",
      onUpdate: () => camera.lookAt(new THREE.Vector3(0, -0.5, 0)),
    });

    tl.to(camera.position, {
      y: 1.0,
      duration: 2,
      ease: "sine.inOut",
      onUpdate: () => camera.lookAt(new THREE.Vector3(0, -0.5, 0)),
    });

    // Save reference to timeline
    animationTimeline.current = tl;

    // Cleanup function
    return () => {
      if (animationTimeline.current) {
        animationTimeline.current.kill();
      }
    };
  }, [camera]);

  // Keep the camera looking at the center point
  useFrame(() => {
    camera.lookAt(new THREE.Vector3(0, -0.5, 0));
  });

  return null;
};

// This component contains all the 3D scene elements with locked values
const SceneContent = () => {
  // Exact values from the screenshot - fixed as tuples for TS
  const modelPosition: [number, number, number] = [4.0, 16.0, -10.5];
  const modelRotation: [number, number, number] = [0.0, 0.0, 0.0];
  const modelScale = 1.0;

  // Lighting values from the screenshot - fixed as tuples for TS
  const ambientIntensity = 0.0;
  const directionalIntensity = 10.0;
  const directionalPosition: [number, number, number] = [0.5, 5.0, 4.0];

  return (
    <>
      <CameraAnimator />

      {/* --- Locked Lighting Setup --- */}
      <ambientLight intensity={ambientIntensity} />
      <directionalLight
        position={directionalPosition}
        intensity={directionalIntensity}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Suspense fallback={<RetroLoader />}>
        <group
          position={modelPosition}
          rotation={[modelRotation[0], modelRotation[1], modelRotation[2]]}
          scale={modelScale}
        >
          <Center>
            <Model />
          </Center>
        </group>
      </Suspense>
    </>
  );
};

// The main component that sets up the Canvas
const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Vignette overlay to darken the edges */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-radial from-transparent to-black/70 opacity-50"></div>

      {/* Dark sides for a cool effect */}
      <div className="absolute inset-y-0 left-0 w-32 pointer-events-none z-5 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-32 pointer-events-none z-5 bg-gradient-to-r from-transparent to-black"></div>

      <Canvas shadows frameloop="demand">
        <SceneContent />
      </Canvas>
    </div>
  );
};

export default Scene3D;
