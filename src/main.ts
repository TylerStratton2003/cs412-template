import * as THREE from 'three'
import {GUI} from 'lil-gui';

// A starter template for a Typescript browser application that renders
// to a canvas element.

window.addEventListener("DOMContentLoaded", main);
window.addEventListener("resize", resize);

let canvas : HTMLCanvasElement;
var scene: THREE.Scene;
var renderer: THREE.Renderer;
var camera: THREE.Camera;
var box : THREE.Mesh;

const boxPosition = {
    positionX: 0
};

function main() : void {
    // Get the canvas element
    canvas = document.querySelector('#main-canvas');

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.5, 2000);
    renderer = new THREE.WebGLRenderer({canvas});
    camera.position.z = 5;

    const boxGeom = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
    box = new THREE.Mesh(boxGeom, boxMaterial);

    const gui = new GUI();
    gui.add(boxPosition, "positionX", -3.0, 3.0, 0.1);

    scene.add(box);


    resize();  // Call directly once to initially size the canvas
    requestAnimationFrame(draw);
}

function draw(time: number) {
    const speed = 0.1;
    const angle = (time * 0.001) * speed;
    box.position.x = boxPosition.positionX;
    box.rotation.x = angle;
    box.rotation.y = angle;
    renderer.render(scene, camera);

    window.requestAnimationFrame(draw);
}

function resize() {
    // Get the dimensions of the canvas' parent
    const canvasContainer = canvas.parentElement;
    const w = canvasContainer.clientWidth;
    const h = canvasContainer.clientHeight;

    // Update camera's aspect ratio and projection matrix, then set the renderer's 
    // viewport matrix with renderer.setSize() (this will also resize the canvas)
}
