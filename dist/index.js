import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { randFloat } from 'three/src/math/MathUtils';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00004f)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const x = 0, y = 0;

const geometry = new THREE.OctahedronGeometry(10, 3);
const material = new THREE.MeshStandardMaterial( { color: 0xe2ff52, wireframe: false, flatShading:true } );
const mesh = new THREE.Mesh( geometry, material ) ;
mesh.rotateZ(-10);
scene.add( mesh );

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(10, 0, 10);
const pointLight1 = new THREE.PointLight(0xffffff, 1);
pointLight1.position.set(-100, 0, -40);
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
const pointLight2 = new THREE.PointLight(0xffffff, 0.2);
pointLight2.position.set(-5, 0, 15);
const pointLight3 = new THREE.PointLight(0xffffff, 0.2);
pointLight3.position.set(5, 15, 5);
const pointLight4 = new THREE.PointLight(0xffffff, 0.2);
pointLight4.position.set(5, -15, 5);
const pointLight5 = new THREE.PointLight(0xffffff, 0.2);
pointLight5.position.set(15, 0, -5);

scene.add(pointLight, ambientLight, pointLight1, pointLight2, pointLight3, pointLight4, pointLight5);
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );

const lightHelper =   new THREE.PointLightHelper(pointLight5);
const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(gridHelper, lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate(){
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate()