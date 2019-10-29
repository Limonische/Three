/* eslint-disable */

// Styles
import '../sass/styles.sass';

// Libraries
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Modules

const onLoad = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new FBXLoader();

    let barrel = null;

    camera.position.y = 100;
    camera.position.z = 100;
    controls.update();

    renderer.setClearColor('#e5e5e5');
    renderer.setSize(window.innerWidth, window.innerHeight);

    controls.minDistance = 100;
    controls.maxDistance = 400;

    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    loader.load('../models/barrel.FBX', object => {
        barrel = object;

        scene.add(barrel);
    });

    const light = new THREE.PointLight('#ffffff', 10, 1500);

    light.position.set(250, 300, 400);
    scene.add(light);

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };

    animate();
};

window.addEventListener('load', onLoad);
