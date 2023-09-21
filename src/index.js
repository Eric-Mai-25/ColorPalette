import chroma from "chroma-js";
import { importSvg } from "./svgimport";

import { colorSvg } from "./colorsvg";
import Panel from "./pallette";
import Generate from "./generate";
import SavedCollection from "./saved";

const generateButton = document.getElementById("generate");
const saveButton = document.getElementById("save");
const exportSaved =  document.getElementById('export')
const previewButton =  document.getElementById('preview')


const palArray = document.getElementById("palette");
const svgColor = document.getElementById("icon1");
const content2 = document.getElementById('cont2');



window.addEventListener("load", () => {
  let svg = importSvg();
  content2.insertAdjacentHTML('beforeend', svg )
  gen.generateColors(chroma.random(), chroma.random(), 5);
  gen.run();
  gen.makePanels(5)
});

generateButton.addEventListener("click", () => {
  gen.generateColors(chroma.random(), chroma.random(), 5);
});

saveButton.addEventListener("click", () => {
  gen.save()
  gen.unlock()

});

exportSaved.addEventListener("click", () => {
  gen.export()
});

previewButton.addEventListener('click', ()=>{
  gen.generatePre()
})

const gen = new Generate