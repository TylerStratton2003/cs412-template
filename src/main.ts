import * as THREE from 'three'
import {GUI} from 'lil-gui';

// A starter template for a Typescript browser application that renders
// to a canvas element.

window.addEventListener("DOMContentLoaded", main);
window.addEventListener("resize", resize);

let canvas : HTMLCanvasElement;

function main() : void {
    // Get the canvas element
    canvas = document.querySelector('#main-canvas');

    resize();  // Call directly once to initially size the canvas
}

function resize() {
    // Get the dimensions of the canvas' parent
    const canvasContainer = canvas.parentElement;
    const w = canvasContainer.clientWidth;
    const h = canvasContainer.clientHeight;

    // Update camera's aspect ratio and projection matrix, then set the renderer's 
    // viewport matrix with renderer.setSize() (this will also resize the canvas)
}
