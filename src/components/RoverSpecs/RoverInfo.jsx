import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Tab, Tabs } from 'react-bootstrap';

const features = [
  { title: 'Feature 1', description: 'Description of Feature 1' },
  { title: 'Feature 2', description: 'Description of Feature 2' },
  // Add more features as needed
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
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="mb-3"
            >
              <Tab 
                eventKey="features" 
                title="Fonctionnalités"
                tabClassName={activeTab === 'features' ? 'active' : ''}
              >
                <h3>Fonctionnalités</h3>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>
                      <strong>{feature.title}:</strong> {feature.description}
                    </li>
                  ))}
                </ul>
                
              </Tab>
              <Tab 
                eventKey="specs" 
                title="Spécifications"
                tabClassName={activeTab === 'specs' ? 'active' : ''}
                >
                <h3>Spécifications</h3>
                <ul>
                {specifications.map((specification, index) => (
                    <li key={index}>
                      <strong>{specification.spec}:</strong> {specification.value}
                    </li>
                  ))}
                </ul>
              </Tab>
            </Tabs>
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
                    <strong>{feature.title}:</strong> {feature.description}
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