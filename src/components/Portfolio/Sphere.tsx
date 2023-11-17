// import {
//   Scene,
//   PerspectiveCamera,
//   Renderer,
//   SphereGeometry,
//   LineSegments,
//   Material,
//   TextureLoader,
// } from 'three';

// export function Sphere() {
//   const scene = new Scene();
//   const camera = new PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000
//   );
//   const renderer = new Renderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   // Load the texture map
//   const textureLoader = new TextureLoader();
//   const texture = textureLoader.load('https://example.com/texture.jpg');

//   // Create a Phong material
//   const material = new Material({
//     map: texture,
//   });

//   // Create a sphere
//   const sphere = new SphereGeometry(10, 32, 32);

//   // Create a line connecting the dots
//   const lines = new LineSegments(SphereGeometry, material);

//   // Add the sphere and lines to the scene
//   scene.add(sphere);
//   scene.add(lines);

//   // Render the scene
//   renderer.render(scene, camera);
// }
