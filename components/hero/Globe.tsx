"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
} from "@react-three/drei";

export default function Globe() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 3],
        fov: 45,
      }}
      dpr={[1, 2]}
    >
      {/* Lights */}

      <ambientLight intensity={1.8} />

      <directionalLight
        position={[3, 3, 3]}
        intensity={2}
      />

      <pointLight
        position={[-3, -3, 2]}
        intensity={1}
        color="#8b5cf6"
      />

      {/* Globe */}

      <Float
        speed={2}
        rotationIntensity={0.8}
        floatIntensity={0.6}
      >
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            color="#7c3aed"
            wireframe
            emissive="#5b21b6"
            emissiveIntensity={1.3}
            roughness={0.15}
            metalness={0.45}
          />
        </Sphere>
      </Float>

      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={false}
        enablePan={false}
        enableRotate
      />
    </Canvas>
  );
}