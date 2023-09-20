// const canvas = document.getElementById('home');
// const ctx = canvas.getContext('2d');

// const box1Button = document.getElementById('box1Button');
// const box2Button = document.getElementById('box2Button');
// // const box3Button = document.getElementById('box3Button');
// // const box4Button = document.getElementById('box4Button');
// const previewButton = document.getElementById('preview')

// function setCanvasSize() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }

// setCanvasSize();

// window.addEventListener('resize', setCanvasSize);

// function showPreviewButton (){
//   previewButton.style.display = "block"
// }
// function hidePreviewButton (){
//   previewButton.style.display = "none"
// }

// function renderBox1() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   showPreviewButton()

//   ctx.fillStyle = 'blue';
//   ctx.fillRect(0, 0, 100, 500);

//   ctx.fillStyle = 'green';
//   ctx.fillRect(110, 0, 100, 500);

//   ctx.fillStyle = 'limegreen';
//   ctx.fillRect(220, 0, 100, 500);

//   ctx.fillStyle = 'red';
//   ctx.fillRect(330, 0, 100, 500);

//   ctx.fillStyle = 'lightblue';
//   ctx.fillRect(440, 0, 100, 500);
// }

// function renderBox2() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   hidePreviewButton()
//   ctx.fillStyle = 'green';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

// }

// // function renderBox3() {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);

// //   ctx.fillStyle = 'red';
// //   ctx.fillRect(50, 50, 200, 200);
// // }

// // function renderBox4() {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);

// //   ctx.fillStyle = 'purple';
// //   ctx.fillRect(0, 0, 200, 200);
// // }

// previewButton.addEventListener('click', ()=>{
//   renderBox2();
// })
// box1Button.addEventListener('click', () => {
//     renderBox1();
// });

// box2Button.addEventListener('click', () => {
//     renderBox2();
// });

// previewButton.addEventListener('click', ()=>{
//     // sends to a different page.
// })

// // box3Button.addEventListener('click', () => {
// //     renderBox3();
// // });

// // box4Button.addEventListener('click', () => {
// //     renderBox4();
// // });

// renderBox1();

import chroma from "chroma-js";
import { importSvg } from "./svgimport";
import { colorSvg } from "./colorsvg";
import Panel from "./pallette";
import Generate from "./generate";
import SavedCollection from "./saved";

const generateButton = document.getElementById("generate");
const saveButton = document.getElementById("save");
const exportSaved =  document.getElementById('export')


const palArray = document.getElementById("palette");
const svgColor = document.getElementById("icon1");



// function generateColors(color1, color2, pCount) {
//   //Get all elements from div
//   //Reset
//   palArray.innerHTML = "";
//   //get range of color from color 1 to color 2 with number of colors
//   const palColors = chroma.scale([color1, color2]).mode("lch").colors(pCount);

//   colorSvg(palColors);
//   // svgColor.style.fill = palColors[0]

//   //iterate through the colors and create a div
//   pannel.createPanel(palColors)
//   // createPanel(palColors)
// }




window.addEventListener("load", () => {
  importSvg();
  gen.generateColors(chroma.random(), chroma.random(), 5);
  gen.run();
});

generateButton.addEventListener("click", () => {
  gen.generateColors(chroma.random(), chroma.random(), 5);
});

saveButton.addEventListener("click", () => {
  gen.save()
});

exportSaved.addEventListener("click", () => {
  gen.export()
});


const gen = new Generate