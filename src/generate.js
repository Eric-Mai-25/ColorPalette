import Panel from "./pallette"
import { colorSvg } from "./colorsvg";
import chroma from "chroma-js";
import SavedCollection from "./saved";

const palArray = document.getElementById("palette");
const colorInput1 = document.getElementById("color1");
const colorInput2 = document.getElementById("color2");

export default class Generate{
    constructor(){
        this.collection = [],
        this.currentPalette = {}
        this.pan = new Panel
        this.saved = new SavedCollection
    }

    generateColors(color1, color2, amount) {
        //Get all elements from div
        //Reset
        palArray.innerHTML = "";
        //get range of color from color 1 to color 2 with number of colors
        const palColors = chroma.scale([color1, color2]).mode("lch").colors(amount);

        this.currentPalette = this.createObj(palColors)
        console.log(this.currentPalette)

        colorSvg(palColors);
        // svgColor.style.fill = palColors[0]
      
        //iterate through the colors and create a div
        this.pan.createPanel(palColors)
        // createPanel(palColors)
    }

    createObj(arr){
        const obj = {}
        for(let i= 0; i < arr.length; i++){
            obj[i] = arr[i]
        }
        return obj
    }

    save(){
        this.collection.push(this.currentPalette)
        this.saved.update(this.collection)
        this.saved.populate()
    }
    
    run() {
        [colorInput1, colorInput2].forEach((cInput) => {
            cInput.addEventListener("input", () => {
                this.generateColors(colorInput1.value, colorInput2.value, 5);
            });
        });
    }

    export(){
        this.saved.export()
    }
}
