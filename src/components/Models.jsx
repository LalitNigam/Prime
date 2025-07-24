import { useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";

// Model loader component
function Model({ modelName, size }) {
  // Dynamically constructs file path
  const { scene } = useGLTF(`/${modelName}.glb`);
  const modelRef = useRef();

  useEffect(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.metalness = 1.2;
        child.material.roughness = 0.5;
        child.material.envMapIntensity = 1.5;
      }
    });
  }, [scene]);

  // Add rotation animation
  useEffect(() => {
    const animate = () => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; // Adjust speed as needed
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[-30, -150, -15]} // Adjust as per your layout
      scale={size} // Now driven by prop!
      rotation={[0, 0, 0]} // Remove fixed Y rotation to allow animation
    />
  );
}

// Main viewer component
const Models = ({ modelName, size = 37 }) => {
  const divRef = useRef(null);

  return (
    <div className="w-[100vw] md:h-[100vh] h-[90vh]">
      <Canvas
        ref={divRef}
        style={{ position: "relative" }}
        camera={{ position: [0, 0, 500], fov: 45 }}
        shadows
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        />
        <Suspense fallback={null}>
          <Model modelName={modelName} size={size} />
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -100, 0]}
          >
            <planeGeometry args={[1000, 1000]} />
            <shadowMaterial opacity={0.2} />
          </mesh>
        </Suspense>
        <OrbitControls enableZoom={false} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Models;
