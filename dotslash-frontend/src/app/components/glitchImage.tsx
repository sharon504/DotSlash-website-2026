"use client";

import React, { useRef, useEffect, useState, JSX } from "react";
import * as THREE from "three";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { TextureLoader } from "three";

const ImageShaderMaterial = shaderMaterial(
  {
    u_texture: null,
    u_mouse: new THREE.Vector2(0.5, 0.5),
    u_prevMouse: new THREE.Vector2(0.5, 0.5),
    u_aberrationIntensity: 0.0,
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    varying vec2 vUv;
    uniform sampler2D u_texture;    
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_aberrationIntensity;

    void main() {
        vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
        vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
        
        vec2 mouseDirection = u_mouse - u_prevMouse;
        
        vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
 
        vec2 uvOffset = strength * - mouseDirection * 0.8;
        vec2 uv = vUv + uvOffset;

        vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
        vec4 colorG = texture2D(u_texture, uv);
        vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
  `
);

extend({ ImageShaderMaterial });

// Define the type for your custom material's properties
type ImageShaderMaterialProps = {
  u_texture: THREE.Texture;
  u_mouse: THREE.Vector2;
  u_prevMouse: THREE.Vector2;
  u_aberrationIntensity: number;
};

// Update the global namespace
declare module '@react-three/fiber' {
  interface ThreeElements {
    imageShaderMaterial: JSX.IntrinsicElements['meshStandardMaterial'] & ImageShaderMaterialProps;
  }
}

interface ShaderImageProps {
  imageUrl: string;
}

const ShaderImage: React.FC<ShaderImageProps> = ({ imageUrl }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const { viewport, camera } = useThree();

  const [mouse, setMouse] = useState(new THREE.Vector2(0.5, 0.5));
  const [prevMouse, setPrevMouse] = useState(new THREE.Vector2(0.5, 0.5));
  const [aberrationIntensity, setAberrationIntensity] = useState(0.0);

  useEffect(() => {
    new TextureLoader().load(imageUrl, (loadedTexture) => {
      console.log("Texture Loaded:", loadedTexture);
      loadedTexture.minFilter = THREE.LinearFilter;
      setTexture(loadedTexture);
    },
    undefined,
    (error) => {
        console.error("Texture Load Error:", error); 
    });
  }, [imageUrl]);

  useEffect(() => {
    camera.position.z = 1;
  }, [camera]);

  useFrame(() => {
    if (meshRef.current && texture) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      
      if (material.uniforms) {
        material.uniforms.u_mouse.value.lerp(mouse, 0.02);
        material.uniforms.u_prevMouse.value.copy(prevMouse);
        material.uniforms.u_aberrationIntensity.value = Math.max(0.0, aberrationIntensity - 0.05);
      }
    }
  });

  const mouseRef = useRef(mouse);

  useEffect(() => {
    mouseRef.current = mouse;
  }, [mouse]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setPrevMouse(mouseRef.current.clone());
      setMouse(new THREE.Vector2(x, 1.0 - y));
      setAberrationIntensity(1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!texture) return null; 

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <imageShaderMaterial
        u_texture={texture}
        u_mouse={mouse}
        u_prevMouse={prevMouse}
        u_aberrationIntensity={aberrationIntensity}
      />
    </mesh>
  );
};

export default ShaderImage;