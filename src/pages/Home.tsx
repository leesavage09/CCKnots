import "./Home.css";
import React, { useState, useEffect } from "react";
import { IonSlide, IonContent } from '@ionic/react';
import { Canvas } from '@react-three/fiber'
import { Bowline } from "../components/rope/knots/bowline";
import { Sky } from "../components/sky";
import { SheetBend } from "../components/rope/knots/sheetBend";
import { ArcballControl } from "../components/arcballControls";
import { ReefKnot } from "../components/rope/knots/reefKnot";
import { DoubleSheetBend } from "../components/rope/knots/doubleSheetBend";
import { CloveHitch } from "../components/rope/knots/cloveHitch";
import { RoundTurn } from "../components/rope/knots/roundTurn";


export const Home: React.FC = () => {
  const [animationSlider, setAnimationSlider] = useState("1000")
  const [animation, setAnimation] = useState(0)

  useEffect(() => {
    setAnimation((parseInt(animationSlider) / 1000))
  }, [animationSlider])

  return (
    <IonSlide>
      <IonContent>
        <div className="full-height">
          <h1>Round Turn</h1>
          <Canvas
            shadows
            camera={{ fov: 45, position: [0, 0, 20] }}
          >
            <Sky />
            <ArcballControl />
            <ambientLight intensity={0.3} />
            <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
            <RoundTurn frame={animation} />

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


        <div className="full-height">
          <h1>Clove</h1>
          <Canvas
            shadows
            camera={{ fov: 45, position: [0, 0, 20] }}
          >
            <Sky />
            <ArcballControl />
            <ambientLight intensity={0.3} />
            <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
            <CloveHitch frame={animation} />

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

        <div className="full-height">
          <h1>Bowline</h1>
          <Canvas
            shadows
            camera={{ fov: 45, position: [0, 0, 50] }}
          >
            <Sky />
            <ArcballControl />
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
        </div>

        <div className="full-height">
          <h1>Sheet Bend</h1>
          <Canvas
            shadows
            camera={{ fov: 45, position: [0, 0, 50] }}
          >
            <Sky />
            <ArcballControl />
            <ambientLight intensity={0.3} />
            <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
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
        </div>



        <div className="full-height">
          <h1>Sheet Bend useAlternativeTying</h1>
          <Canvas
            shadows
            camera={{ fov: 45, position: [0, 0, 50] }}
          >
            <Sky />
            <ArcballControl />
            <ambientLight intensity={0.3} />
            <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
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
        </div>


        <div className="full-height">
          <h1>DB Sheet</h1>
          <Canvas
            shadows
            camera={{ fov: 45, position: [0, 0, 20] }}
          >
            <Sky />
            <ArcballControl />
            <ambientLight intensity={0.3} />
            <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
            <DoubleSheetBend frame={animation} />

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

        <div className="full-height">
          <h1>DB Sheet ALT</h1>
          <Canvas
            shadows
            camera={{ fov: 45, position: [0, 0, 20] }}
          >
            <Sky />
            <ArcballControl />
            <ambientLight intensity={0.3} />
            <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
            <DoubleSheetBend frame={animation} useAlternativeTying />

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


        <div className="full-height">
          <h1>Reef</h1>
          <Canvas
            shadows
            camera={{ fov: 45, position: [0, 0, 20] }}
          >
            <Sky />
            <ArcballControl />
            <ambientLight intensity={0.3} />
            <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
            <ReefKnot frame={animation} />

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
      </IonContent>
    </IonSlide>
  )
}
