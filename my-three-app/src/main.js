// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// // Scene
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x000000);

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// // Renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshStandardMaterial({ color: 0xff9b4 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Lights
// const light = new THREE.PointLight(0xffffff, 1);
// light.position.set(5, 5, 5);
// scene.add(light);
// const ambient = new THREE.AmbientLight(0x404040, 1.2);
// scene.add(ambient);

// // Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // resize issue
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });
// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   controls.update();
//   renderer.render(scene, camera);
// }
// animate();





import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube
const geometry = new THREE.BoxGeometry();

// Changed material to a very bright, almost white, slightly greenish color
const material = new THREE.MeshStandardMaterial({ color: 0xFF0FF }); // A light, bright, "crachy" green-white
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add cube edges with a different, contrasting color (e.g., magenta)
const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: 0xFF0FF}) // Bright magenta edges
);
cube.add(line); // Add the edges to the cube

// Lights
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
const ambient = new THREE.AmbientLight(0x404040, 1.2);
scene.add(ambient);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// resize issue
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();