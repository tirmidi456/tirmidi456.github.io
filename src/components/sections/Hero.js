import React, { Suspense, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber'; // Added useThree
import { Physics, usePlane, useSphere } from '@react-three/cannon';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Content = styled(motion.div)`
  position: absolute;
  z-index: 2;
  text-align: center;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  background: -webkit-linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.subtext};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

function SphereInstance({ position, color, args = [0.5, 32, 32] }) {
  const [ref, api] = useSphere(() => ({ mass: 1, position, args }));
  return (
    <mesh ref={ref}>
      <sphereGeometry args={args} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.6} />
    </mesh>
  );
}

function Pointer() {
  const { viewport } = useThree(); // Destructure viewport from useThree
  const [, api] = useSphere(() => ({ type: 'Kinematic', args: [3] }));
  return useFrame(state => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0));
}

function Scene() {
  const spheres = Array.from({ length: 20 }, () => ({
    position: [Math.random() * 8 - 4, Math.random() * 8 - 4, Math.random() * 2 - 1],
    color: Math.random() > 0.5 ? '#00f2ff' : '#ff0055',
  }));

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Physics gravity={[0, 0, 0]}>
        {spheres.map((sphere, i) => (
          <SphereInstance key={i} {...sphere} />
        ))}
		<Pointer />
      </Physics>
    </>
  );
}

const Hero = () => {
  return (
    <HeroContainer>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      >
        <Title>Tirmidi Mohamed</Title>
        <Subtitle>Interactive Developer & Creative Technologist</Subtitle>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
