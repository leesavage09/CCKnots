import "./App.css";
import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Canvas } from '@react-three/fiber'
import { Bowline } from "./components/rope/knots/bowline";
import { Sky } from "./components/sky";
import { Curve } from "./components/curve";
import { SheetBend } from "./components/rope/knots/sheetBend";
import { curves_0, curves_1 } from "./components/rope/knots/sheetBendCurves";
import { ArcballControl } from "./components/arcballControls";

const App: React.FC = () => {
  const [animationSlider, setAnimationSlider] = useState("1000")
  const [animation, setAnimation] = useState(0)

  useEffect(() => {
    setAnimation((parseInt(animationSlider) / 1000))
  }, [animationSlider])

  return (
    <div className="full-height">
      <h1>Sheet Bend</h1>
      <Canvas
        shadows
        camera={{ fov: 45, position: [0, 0, 10] }}
      >
        <Sky />
        <ArcballControl />
        <ambientLight intensity={0.3} />
        <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
        {/* <Bowline frame={animation} /> */}
        <SheetBend frame={animation} />

      </Canvas>
      <input
        className="input"
        onChange={(e) => setAnimationSlider(e.target.value)}
        type="range"
        min="0"
        value={animationSlider}
        max="1000"
      />

      <h1>Sheet Bend useAlternativeTying</h1>
      <Canvas
        shadows
        camera={{ fov: 45, position: [0, 0, 10] }}
      >
        <Sky />
        <ArcballControl />
        <ambientLight intensity={0.3} />
        <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
        {/* <Bowline frame={animation} /> */}
        <SheetBend frame={animation} useAlternativeTying />

      </Canvas>
      <input
        className="input"
        onChange={(e) => setAnimationSlider(e.target.value)}
        type="range"
        min="0"
        value={animationSlider}
        max="1000"
      />

      <h1>Bowline</h1>
      <Canvas
        shadows
        camera={{ fov: 45, position: [0, 0, 10] }}
      >
        <Sky />
        <ArcballControl />
        <ambientLight intensity={0.3} />
        <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
        <Bowline frame={animation} />
        {/* <SheetBend frame={animation} /> */}

      </Canvas>
      <input
        className="input"
        onChange={(e) => setAnimationSlider(e.target.value)}
        type="range"
        min="0"
        value={animationSlider}
        max="1000"
      />
    </div>
  )
}

export default hot(module)(App);
