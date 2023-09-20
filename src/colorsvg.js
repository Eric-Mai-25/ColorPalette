
export function colorSvg(Arr) {
    const styleElement = document.createElement("style");
    let count = 1;
    Arr.forEach((color) => {
      const cssRule = `.cls-16 {fill : ${color}}`;
      styleElement.appendChild(document.createTextNode(cssRule));
      count++;
    });
    document.head.appendChild(styleElement);
  }