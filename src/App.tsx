import "./App.css";
import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Canvas } from '@react-three/fiber'
import { OrbitControl } from "./components/controllers/orbitControl";
import { Bowline } from "./components/rope/knots/bowline";
import { Sky } from "./components/controllers/sky";

const App: React.FC = () => {
  const [animationSlider, setAnimationSlider] = useState("1000")
  const [animation, setAnimation] = useState(0)

  useEffect(() => {
    setAnimation((parseInt(animationSlider) / 1000))
  }, [animationSlider])

  return (
    <div className="full-height">
      <h1>Bowline</h1>
      <Canvas
        shadows
        camera={{ fov: 45, position: [0, 0, 50] }}
      >
        <Sky />
        <OrbitControl />
        <ambientLight intensity={0.3} />
        <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
        <Bowline frame={animation} />
      </Canvas>
      <input
        className="input"
        onChange={(e) => setAnimationSlider(e.target.value)}
        type="range"
        min="0"
        value={animationSlider}
        max="1000"
      />
    </div >
  )
}

export default hot(module)(App);
