import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingIcons() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      {/* Floating geometric shapes */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 0, 0]} ref={meshRef}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#a855f7" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[2, 1, 0]}>
          <icosahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
        <mesh position={[0, -1, 1]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#ec4899" transparent opacity={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={2} floatIntensity={1.8}>
        <mesh position={[-1, 2, -1]}>
          <torusGeometry args={[0.3, 0.1, 16, 32]} />
          <meshStandardMaterial color="#10b981" transparent opacity={0.8} />
        </mesh>
      </Float>
    </group>
  );
}

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene = ({ className }: ThreeSceneProps) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <FloatingIcons />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;