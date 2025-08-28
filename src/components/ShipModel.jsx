// src/components/ShipModel.jsx

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const ShipModel = () => {
    // useRef nos dá acesso direto ao elemento DOM
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // --- Início da lógica do Three.js (seu código adaptado) ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xd2d2d2);

        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 1.5, 5);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputEncoding = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        container.appendChild(renderer.domElement);

        const rgbeLoader = new RGBELoader();
        rgbeLoader.load('/assets/3d/qwantani_moonrise_puresky_4k.exr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
            scene.background = texture;
        });

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
        scene.add(directionalLight);

        const spotLight = new THREE.SpotLight(0xffffff, 1.5);
        spotLight.position.set(0, 8, 5);
        spotLight.angle = Math.PI / 4;
        spotLight.penumbra = 0.5;
        spotLight.castShadow = true;
        scene.add(spotLight);

        let shipModel;
        const loader = new GLTFLoader();
        loader.load(
            '/assets/3d/conteiner_ship.glb',
            function (gltf) {
                shipModel = gltf.scene;
                shipModel.scale.set(0.5, 0.5, 0.5);
                shipModel.position.y = -1;
                
                shipModel.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                scene.add(shipModel);
            },
            undefined,
            function (error) {
                console.error('An error happened while loading the model:', error);
            }
        );

        const planeGeometry = new THREE.PlaneGeometry(20, 20);
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x87ceeb });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -1.01;
        plane.receiveShadow = true;
        scene.add(plane);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;

        function animate() {
            requestAnimationFrame(animate);
            controls.update();

            if (shipModel) {
                const time = performance.now() * 0.001;
                shipModel.position.y = Math.sin(time * 0.5) * 0.05 - 1;
            }

            renderer.render(scene, camera);
        }
        animate();

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        // --- Função de limpeza (executada quando o componente é desmontado) ---
        return () => {
            window.removeEventListener('resize', handleResize);
            // Libera a memória da GPU
            renderer.dispose();
        };

    }, []); // O array vazio [] garante que o useEffect rode apenas uma vez

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ShipModel;