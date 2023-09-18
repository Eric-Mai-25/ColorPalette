import { Theme, Color, BackgroundColor } from '@adobe/leonardo-contrast-colors'
// const { Theme, Color, BackgroundColor } = require('@adobe/leonardo-contrast-colors');


// let gray = new BackgroundColor({
//     name: 'gray',
//     colorKeys: ['#cacaca'],
//     ratios: [2, 3, 4.5, 8]
//   });

// let blue = new Color({
//     name: 'blue',
//     colorKeys: ['#5CDBFF', '#0000FF'],
//     ratios: [3, 4.5]
//   });

// let red = new Color({
//     name: 'red',
//     colorKeys: ['#FF9A81', '#FF0000'],
//     ratios: [3, 4.5]
//   });

// let theme = new Theme({colors: [gray, blue, red], backgroundColor: gray, lightness: 97});

// // returns theme colors as JSON
// let colors = theme.contrastColors;

// console.log(colors)

const canvas = document.getElementById('home');
const ctx = canvas.getContext('2d');

const box1Button = document.getElementById('box1Button');
const box2Button = document.getElementById('box2Button');
const box3Button = document.getElementById('box3Button');
const box4Button = document.getElementById('box4Button');
const previewButton = document.getElementById('preview')

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

setCanvasSize();

window.addEventListener('resize', setCanvasSize);

function showPreviewButton (){
  previewButton.style.display = "block"
}
function hidePreviewButton (){
  previewButton.style.display = "none"
}


function renderBox1() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  showPreviewButton()
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, 100, 500);
  ctx.fillStyle = 'green';
  ctx.fillRect(110, 0, 100, 500);
  ctx.fillStyle = 'limegreen';
  ctx.fillRect(220, 0, 100, 500);
  ctx.fillStyle = 'red';
  ctx.fillRect(330, 0, 100, 500);
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(440, 0, 100, 500);
}

function renderBox2() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hidePreviewButton()
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

}

function renderBox3() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'red';
  ctx.fillRect(50, 50, 200, 200);
}

function renderBox4() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'purple';
  ctx.fillRect(0, 0, 200, 200);
}


previewButton.addEventListener('click', ()=>{
  renderBox2();
})
box1Button.addEventListener('click', () => {
    renderBox1();
});

box2Button.addEventListener('click', () => {
    renderBox2();
});

box3Button.addEventListener('click', () => {
    renderBox3();
});

box4Button.addEventListener('click', () => {
    renderBox4();
});

renderBox1();
