import chroma from "chroma-js";

const palArray = document.getElementById("palette");

export default class Panel {
  constructor(color) {
    this.color = color;
    this.lock = false;
  }

  update(color) {
    if (!this.lock) {
      this.color = color;
    }
    this.createPanel();
    return this.color
  }

  createPanel() {
    const pItem = document.createElement("div");
    pItem.setAttribute("id", `${this.color}`);

    const paletteCValue = document.createElement("span");
    paletteCValue.classList.add("palette-color-value");
    paletteCValue.style.setProperty(
      "--color-name",
      chroma.contrast(this.color, chroma(this.color).darken(3)) > 2
        ? chroma(this.color).darken(3)
        : chroma(this.color).luminance(3)
    );
    //generate color for text based off of how bright or dark the color is
    paletteCValue.appendChild(document.createTextNode(this.color));
    //add the color and text to the panel
    pItem.appendChild(paletteCValue);

    //add the panel itself with the color
    pItem.classList.add(`palette-item`);
    pItem.style.setProperty("--palette-color", this.color);

    palArray.appendChild(pItem);

    this.createLock()
  }

  createLock(){
    const palArray = document.getElementById("palette");

    const lockUp = document.getElementById(`${this.color}`);
    lockUp.addEventListener("click", ()=>{
        if(this.lock){
            this.lock = false
        } else {
            this.lock = true
        }
    })
  }
}

