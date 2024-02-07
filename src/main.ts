// A starter template for a Typescript browser application that renders
// to a canvas element.

// Call the main method after the DOM is loaded
window.addEventListener("DOMContentLoaded", main);

function main() : void {
    // Get the canvas element
    const canvas : HTMLCanvasElement     = document.querySelector('#main-canvas');
    
    // Get the 2D drawing context from the canvas element
    const ctx : CanvasRenderingContext2D = canvas.getContext("2d");

    // Get the element containing the canvas
    const container : HTMLElement = document.querySelector('#canvas-container');
    
    // Resize the canvas to fit the container
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Draw some 2D graphics
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fillRect(100, 100, 400, 175);

    ctx.fillStyle = "black";
    ctx.font = "48px serif";
    ctx.fillText("Hello World!", 175, 200);
}