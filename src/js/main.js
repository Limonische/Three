/* eslint-disable */

// Styles
import '../sass/styles.sass';

// Libraries
import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Modules

const onLoad = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const controls = new OrbitControls(camera, renderer.domElement);

    // const fbxLoader = new FBXLoader();
    const objLoader = new OBJLoader();
    const mtlLoader = new MTLLoader();

    camera.position.y = 300;
    camera.position.z = 300;
    controls.update();

    renderer.setClearColor('#e5e5e5');
    renderer.setSize(window.innerWidth, window.innerHeight);

    controls.minDistance = 400;
    controls.maxDistance = 700;

    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    mtlLoader.load('../models/teapot.mtl', materials => {
        materials.preload();
        objLoader.setMaterials(materials);

        objLoader.load('../models/teapot.obj', object => {
            console.log(object);
            object.rotation.x = -2;
            scene.add(object);
        });
    });

    const light = new THREE.PointLight('#ffffff', 5, 1500);

    light.position.set(250, 300, 400);
    camera.add(light);
    scene.add(camera);

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };

    animate();
};

window.addEventListener('load', onLoad);
