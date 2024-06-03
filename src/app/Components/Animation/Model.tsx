import React, { useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { Group, Mesh, BufferGeometry, Material } from 'three';

// Define the GLTF result type
type GLTFResult = {
  nodes: {
    Torus002: Mesh<BufferGeometry, Material | Material[]>
  }
};

// Ensure useGLTF hook knows the type of the loaded model
const useTypedGLTF = (path: string) => useGLTF(path) as unknown as GLTFResult;

export default function Model() {
    const { nodes } = useTypedGLTF("/medias/torrus.glb");
    const { viewport } = useThree();
    const torus = useRef<Mesh>(null);

    useFrame(() => {
        if (torus.current) {
            torus.current.rotation.x += 0.02;
        }
    });

    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    };

    return (
        <group scale={viewport.width / 3.75}>
            <Text
                font={'/fonts/PPNeueMontreal-Bold.otf'}
                position={[0, 0, -1]}
                fontSize={0.5}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                hello world!
            </Text>
            <mesh ref={torus} geometry={nodes.Torus002.geometry}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    );
}
