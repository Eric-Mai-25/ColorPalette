import Palette from "./pallette";
import { colorSvg } from "./colorsvg";
import { importSvg } from "./svgimport";
import chroma from "chroma-js";
import SavedCollection from "./saved";
import Panel from "./panel";

const palArray = document.getElementById("palette");
const colorInput1 = document.getElementById("color1");
const colorInput2 = document.getElementById("color2");

export default class Generate {
  constructor() {
    this.collection = [];
    this.currentPalette = {};
    this.panels = [];
    this.saved = new SavedCollection(this.update.bind(this));
    this.previewToggle = false
  }

  generateColors(color1, color2, amount) {
    //Get all elements from div
    //get range of color from color 1 to color 2 with number of colors
    const palColors = chroma.scale([color1, color2]).mode("lch").colors(amount);

    this.currentPalette = this.createObj(palColors);
    this.generatePanels(this.currentPalette)
  }

  createObj(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[i] = arr[i];
    }
    return obj;
  }

  save() {
    this.collection.push(this.currentPalette);
    this.saved.update(this.collection);
    this.saved.populate();
  }

  run() {
    [colorInput1, colorInput2].forEach((cInput) => {
      cInput.addEventListener("input", () => {
        this.generateColors(colorInput1.value, colorInput2.value, 5);
      });
    });
  }

  makePanels(){
    for(const key in this.currentPalette){
        this.panels.push(new Panel(this.currentPalette[key], this.generatePanels.bind(this), key))
    }
    this.panels.forEach((pan)=>{
        pan.createPanel()
    })
  }
  
  generatePanels() {
    //Reset
    palArray.innerHTML = "";
    
    //iterate through the colors and create a div
    let count = 0 
    let newcollection = {}
    this.panels.forEach((e)=>{
        let color = e.update(this.currentPalette[count])
        this.currentPalette[count] = color
        count++
    })
    colorSvg(this.currentPalette); //sending in an object
    // this.pan.createPanel(palColors);
  }

  update(color){
        this.currentPalette = color
        this.generatePanels(this.currentPalette)
  }

  generatePre(){
    palArray.innerHTML= ""
    let svg = importSvg();

    if(!this.previewToggle){
        palArray.insertAdjacentHTML('beforeend', svg )
        colorSvg(this.currentPalette, '110vh')
        this.previewToggle = true
    } else {
        this.generatePanels()
        this.previewToggle = false
    }
  }

  unlock(){
    console.log('in')
    this.panels.forEach((pan)=>{
        pan.unlock()
        this.generatePanels()
    })
  }
  export() {
    this.saved.export();
  }
}
