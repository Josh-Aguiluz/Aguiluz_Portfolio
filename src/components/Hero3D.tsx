import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import { Mesh, PointLight } from 'three';

interface MouseRef {
  current: {
    x: number;
    y: number;
  };
}

type AbstractDataNodeProps = {
  mouse: React.RefObject<{ x: number; y: number }>;
};

function AbstractDataNode({ mouse }: AbstractDataNodeProps) {
  const meshRef = useRef<Mesh>(null);
  const lightRef = useRef<PointLight>(null);

  // Auto-rotate
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.007;
    }
    // Mouse-follow lighting
    if (lightRef.current && mouse.current) {
      lightRef.current.position.x = mouse.current.x * 2;
      lightRef.current.position.y = mouse.current.y * 2;
    }
  });

  return (
    <>
      <pointLight ref={lightRef} intensity={1.2} position={[0, 0, 5]} />
      <Icosahedron ref={meshRef} args={[1.5, 0]}>
        <MeshDistortMaterial
          color="#A47A2D"
          metalness={1}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </Icosahedron>
    </>
  );
}

const Hero3D = () => {
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      // Normalize mouse position to [-1, 1]
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <AbstractDataNode mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
