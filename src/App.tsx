import "./App.css";
import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { Canvas } from '@react-three/fiber'
import { OrbitControl } from "./components/controllers/orbitControl";
import { Bowline } from "./components/rope/bowline";

const App: React.FC = () => {
  const [moveTo, setMoveTo] = useState(0)

  const sliderChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setMoveTo((parseInt(evt.target.value) / 1000))
  }

  return (
    <div className="full-height">
      <Canvas
        shadows
        camera={{ fov: 45, position: [0, 0, 50] }}
      >
        <OrbitControl />
        <ambientLight intensity={0.1} />
        <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
        <Bowline animationFrame={moveTo} />
      </Canvas>
      <input
        onChange={(evt) => sliderChange(evt)}
        type="range"
        min="0"
        max="1000"
      />
    </div >
  )
}

export default hot(module)(App);
