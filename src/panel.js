import chroma from "chroma-js";

const palArray = document.getElementById("palette");

export default class Panel {
  constructor(color , generate, key) {
    this.color = color;
    this.lock = false;
    this.key = key
    this.name = ""
    this.generate = generate

  }

  update(color) {
    if (!this.lock) {
      this.color = color;
    }
    this.createPanel();
    return this.color
  }

  makeName(){
    if(this.key === '0'){
        this.name = "Main"
    }else if (this.key === '1'){
        this.name = "Background"
    }else if (this.key === '2'){
        this.name = "Bubbles"
    }else if (this.key === '3'){
        this.name = "Nav"
    }else if (this.key === '4'){
        this.name = "Text"
    }
  }

  createPanel() {
    this.makeName()
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
    const boldEle = document.createElement('p')
    boldEle.classList.add("bolding")
    boldEle.appendChild(document.createTextNode(this.name))
    paletteCValue.appendChild(boldEle);
    // paletteCValue.appendChild(document.createElement("br"));
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
    const lockIcon = document.createElement('img')
    lockIcon.setAttribute("id", `lock${this.color}`);
    lockIcon.classList.add("lock")

    // lockIcon.classList.add('lockIcon')
    let imgSrc = this.lock ? './src/styles/Lock.svg' : "./src/styles/Unlock.svg"
    lockIcon.src = imgSrc
    
    const lockUp = document.getElementById(`${this.color}`);
    lockUp.appendChild(lockIcon)
    
    lockUp.addEventListener("click", ()=>{
        if(this.lock){
            this.lock = false
        } else {
            this.lock = true
        }
        this.generate()
    })

    // On hover stuff.
    // lockUp.addEventListener("mouseenter",()=>{
    //     let imgSrc = this.lock ? '/src/styles/unlock/unlock.svg' : "/src/styles/lock/lock.svg"
    //     lockIcon.src = imgSrc
    // })
    // lockUp.addEventListener("mouseleave",()=>{
    //     let imgSrc = this.lock ? '/src/styles/lock/lock.svg' : "/src/styles/unlock/unlock.svg"
    //     lockIcon.src = imgSrc
    // })
  }

  unlock(){
    this.lock = false
  }
}

