import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './RoverInfo.css';

const features = [
  {
    title: "Contrôle à distance",
    description: "Le rover peut être contrôlé à distance par un opérateur via une télécommande, permettant une manipulation précise et une navigation guidée."
  },
  {
    title: "Analyse et adaptation environnementale",
    description: "Capacité d'analyser son environnement immédiat et de s'y adapter, utilisant des capteurs et des algorithmes pour naviguer efficacement dans divers terrains."
  },
  {
    title: "Franchissement d'obstacles",
    description: "Mécanismes permettant au rover de surmonter des obstacles tels que des pierres ou des trous, assurant une mobilité optimale sur des terrains accidentés."
  },
  {
    title: "Autonomie énergétique",
    description: "Système d'alimentation électrique autonome, potentiellement utilisant des panneaux solaires ou d'autres sources d'énergie renouvelable pour une indépendance énergétique prolongée."
  },
  {
    title: "Communication à longue distance",
    description: "Système de communication permettant au rover d'échanger des données et de recevoir des commandes du centre de contrôle, même à grande distance."
  },
  {
    title: "Autonomie pour tâches spécifiques",
    description: "Capacité d'exécuter certaines tâches de manière autonome, sans intervention humaine directe, grâce à des algorithmes d'intelligence artificielle et des protocoles préprogrammés."
  },
  {
    title: "Conformité aux normes de sécurité",
    description: "Intégration de dispositifs et de protocoles assurant le respect des normes de sécurité en vigueur, pour protéger le rover, son environnement et les potentiels opérateurs."
  },
  {
    title: "Interface de diffusion d'informations",
    description: "Système permettant de diffuser en temps réel des informations collectées par le rover via une interface utilisateur, facilitant la surveillance et l'analyse des données."
  }
];

const specifications = [
  { spec: 'Camera', value: '720px' },
  { spec: 'Poids', value: '16 Kg' },
  { spec: 'Dimensions', value: '76cm x 69cm ' },
  { spec: 'Taille maximale d\'obstacles franchissables', value: '30cm' },
  { spec: 'Vitesse maximale', value: '50rpm' },
  { spec: 'Distance maximale de communication', value: '100m' },
  { spec: 'Durée d\'autonomie', value: '30min' },
];

const RoverInfo = ({ modelUrl }) => {
  const [activeTab, setActiveTab] = useState('features');
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xcccccc);

    const aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    lightRef.current = directionalLight;

    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      scene.add(gltf.scene);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [modelUrl]);


  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div ref={containerRef} style={{ width: '100%', height: '500px', backgroundColor: '#cccccc' }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-none d-lg-block">
            <ul className="nav nav-pills nav-justified mb-3" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link h3 ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
              role="tab"
              aria-controls="features"
              aria-selected={activeTab === 'features'}
            >
              Fonctionnalités
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link h3 ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
              role="tab"
              aria-controls="specs"
              aria-selected={activeTab === 'specs'}
            >
              Spécifications
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className={`tab-pane fade ${activeTab === 'features' ? 'show active' : ''}`}
            id="features"
            role="tabpanel"
          >
            <h3 className='text-center'>Fonctionnalités</h3>
            <ul className='text-justify'>
              {features.map((feature, index) => (
                <li key={index}>
                  <strong>{feature.title}:</strong> {feature.description}
                  <br />
                  <br />
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'specs' ? 'show active' : ''}`}
            id="specs"
            role="tabpanel"
          >
            <h3 className='text-center'>Spécifications</h3>
            <ul>
              {specifications.map((specification, index) => (
                <li key={index}>
                  <strong>{specification.spec}:</strong> {specification.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
          </div>
          <div className="d-lg-none">
            <div className="mb-3">
              <h3 onClick={() => setIsSpecsOpen(!isSpecsOpen)} style={{ cursor: 'pointer' }}>
                Fonctionnalités {isSpecsOpen ? '▼' : '►'}
              </h3>
              {isSpecsOpen && (
                <ul>
                {features.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.title} :</strong> {feature.description}
                  </li>
                ))}
              </ul>
              )}
            </div>
            <div>
              <h3 onClick={() => setIsSpecsOpen(!isSpecsOpen)} style={{ cursor: 'pointer' }}>
                Spécifications {isSpecsOpen ? '▼' : '►'}
              </h3>
              {isSpecsOpen && (
                <ul>
                {specifications.map((specification, index) => (
                    <li key={index}>
                      <strong>{specification.spec}:</strong> {specification.value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoverInfo;