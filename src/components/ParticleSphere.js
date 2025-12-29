import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import bannerBg from '../assets/img/banner-bg.png'; 
import * as THREE from "three";

function Particles({ count = 300 }) {
  const mesh = useRef();
  const mousePos = useRef([0, 0]);

  // 1. 全域滑鼠監聽：確保粒子在底層也能接收座標
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      ];
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }, []);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorTeal = new THREE.Color("#008080");
    const colorOrange = new THREE.Color("#FF8C00");
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      const mixedColor = Math.random() > 0.5 ? colorTeal : colorOrange;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return { positions, colors };
  }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
        // 1. 基礎自轉：調得非常慢，像恆星自轉
        mesh.current.rotation.y = time * 0.05;
        
        // 2. 目標角度：縮小範圍，讓動態更穩重
        const targetRotationX = -mousePos.current[1] * 0.4; 
        const targetRotationY = mousePos.current[0] * 0.4;

        // 3. 統一緩慢速度：0.02 是關鍵
        // 不管是左右還是上下，現在都會有同樣的延遲絲滑感
        mesh.current.rotation.x += (targetRotationX - mesh.current.rotation.x) * 0.02;
        mesh.current.rotation.y += (targetRotationY - mesh.current.rotation.y) * 0.02;
        
        // 4. 呼吸效果：調到極低（幾乎感覺不到，只是為了讓畫面不僵硬）
        mesh.current.position.y = Math.sin(time * 0.2) * 0.03; 
        }
    });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        vertexColors 
        transparent 
        opacity={0.6} 
        map={circleTexture} 
        alphaTest={0.5} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
}

// 記得先在檔案上方 import 你的圖片


export default function ParticleSphere() {
  return (
    <div style={{ 
      position: "absolute", 
      top: 0, 
      left: 0, 
      width: "100%", 
      height: "100%", 
      zIndex: -1, 
      overflow: "hidden",
      backgroundImage: `url(${bannerBg})`,
      backgroundPosition: "top center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      {/* 粒子 Canvas 會浮在背景圖上面 */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>

      {/* 遮罩層：讓背景圖深一點，粒子更明顯 (可選) */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)", // 調暗背景圖
        zIndex: -1 // 確保在粒子下面
      }} />
    </div>
  );
}