import "./App.css";
import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControl } from "./components/controllers/orbitControl";
import { Bowline } from "./components/rope/bowline";
import { Color } from "three";

export const Environment = () => {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new Color('black');
  }, [])

  return (
    null
  )
}


const App: React.FC = () => {

  const [slider, setSlider] = useState("1000")
  const [knotAnimation, setKnotAnimation] = useState(0)

  useEffect(() => {
    setKnotAnimation((parseInt(slider) / 1000))
  }, [slider])

  return (
    <div className="full-height">
      <h1>Bowline</h1>
      <Canvas
        shadows
        camera={{ fov: 45, position: [0, 0, 50] }}
      >
        <Environment />
        <OrbitControl />
        <ambientLight intensity={0.3} />
        <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
        <Bowline animationFrame={knotAnimation} />
      </Canvas>
      <input
        className="input"
        onChange={(e) => setSlider(e.target.value)}
        type="range"
        min="0"
        value={slider}
        max="1000"
      />
    </div >
  )
}

export default hot(module)(App);
