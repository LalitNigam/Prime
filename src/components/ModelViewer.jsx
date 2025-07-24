import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "motion/react"

gsap.registerPlugin(ScrollTrigger);
// Magnet Component
const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 5,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);
  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }
    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);
      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);
  const transitionStyle = isActive ? activeTransition : inactiveTransition;
  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
          position: "relative"
        }}
      >
        {children}
      </div>
    </div>
  );
};
// --------------- 3D Model Part ---------------
function Model() {
  const { scene } = useGLTF("/model.glb");
  const modelRef = useRef();

  useEffect(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.metalness = 1;
        child.material.roughness = 0.1;
        child.material.envMapIntensity = 1.5;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (!modelRef.current) return;
    // GSAP timeline with ScrollTrigger
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 4,
      scrollTrigger: {
        trigger: "#scroll-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[0, -330, 0]}
      scale={1.5}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}
// --------------- Combined ModelViewer ---------------
const MagnetModelViewer = () => {
  const divRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { rotate: 20, x: 0, scale: 1 },
      {
        x: -450,
        rotate: -30,
        scale: 1.3,
        duration: 3,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top top",
          end: "600",
          scrub: true,
        },
        ease: "none"
      }
    );
  }, []);
  return (
    <div
      id="scroll-section"
      style={{ width: "screen", height: "176vh", position: "relative" }}
      className="relative">
      <div style={{ position: "sticky" }} className="top-0 flex items-center justify-center lg:w-[90%] md:w-[80%] w-[90%] h-[100vh]">
        <Magnet magnetStrength={15}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2, delay: 3 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ width: "90vw", height: "90vh", position: "relative" }}
            className="mt-90">
            <Canvas
              ref={divRef}
              style={{ position: "relative" }}
              camera={{ position: [400, 10, 700], fov: 90 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[1, 1, 1]} intensity={1} />
              <directionalLight
                position={[10, 10, 10]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
              />
              <Suspense fallback={null}>
                <Model />
                <mesh
                  receiveShadow
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, -255, 0]}
                >
                  <planeGeometry args={[2000, 2000]} />
                  <shadowMaterial opacity={0.35} />
                </mesh>
              </Suspense>
              <OrbitControls enableZoom={false} />
              <Environment preset="sunset" />
            </Canvas>
          </motion.div>
        </Magnet>
      </div>
    </div>
  );
};

export default MagnetModelViewer;
