
import chroma from "chroma-js";

const palArray =  document.getElementById('palette')


export default class Panel {
  constructor(color) {
    this.color = color;
  }

createPanel(colorArr){
    colorArr.forEach((p) => {
      const pItem = document.createElement("div");
      const paletteCValue = document.createElement("span");
      paletteCValue.classList.add("palette-color-value");
      paletteCValue.style.setProperty(
        "--color-name",
        chroma.contrast(p, chroma(p).darken(3)) > 2
          ? chroma(p).darken(3)
          : chroma(p).luminance(3)
      );
      //generate color for text based off of how bright or dark the color is
      paletteCValue.appendChild(document.createTextNode(p));
      //add the color and text to the panel
      pItem.appendChild(paletteCValue);

      //add the panel itself with the color
      pItem.classList.add("palette-item");
      pItem.style.setProperty("--palette-color", p);

      palArray.appendChild(pItem);
    });
  }
}
