import "./App.css";
import React from "react";
import { hot } from "react-hot-loader";
import { Canvas } from '@react-three/fiber'
import { OrbitControl } from "./components/controllers/orbitControl";

const App: React.FC = () => {

  return (
    <div className="full-height">
      <Canvas shadows camera={{ fov: 45, position: [25, 5, 25] }}>
        <OrbitControl />
        <ambientLight intensity={0.2} />
        <pointLight castShadow position={[10, 10, 10]} intensity={0.9} />
        <mesh
          receiveShadow
          position={[0, 0, 0]}
        >
          <boxGeometry args={[10, 10, 10]} />
          <meshStandardMaterial color={'red'} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default hot(module)(App);
