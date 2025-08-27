import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'; // ✨ Importação da RGBELoader

document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('model-container');
    if (!container) return;

    // 1. Configurar a Cena, Câmera e Renderizador
    // ------------------------------------
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd2d2d2);

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.5, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);
    
    // ✨ Novo: Carregar o HDRI para iluminação e ambiente
    // ------------------------------------
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('assets/3d/qwantani_moonrise_puresky_4k.exr', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture; // Usa a textura como ambiente para reflexos
        scene.background = texture; // Usa a textura como fundo da cena
    });


    // 2. Adicionar Luzes para iluminar o modelo
    // ------------------------------------
    // Com o HDRI, a iluminação ambiente é fornecida pelo 'scene.environment'.
    // As luzes que já existiam podem ser mantidas ou removidas para ver a diferença.
    // Vamos manter a direcional e a spot para controle de sombras e destaques.

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


    // 3. Carregar o Modelo GLB e adicionar uma superfície
    // ------------------------------------
    let shipModel;

    const loader = new GLTFLoader();
    loader.load(
        'assets/3d/conteiner_ship.glb',
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

    // 4. Adicionar Controles de Órbita
    // ------------------------------------
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // 5. Animação de Renderização
    // ------------------------------------
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

    // 6. Resposta Responsiva ao redimensionar a tela
    // ------------------------------------
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

});