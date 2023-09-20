
export function colorSvg(obj) {
    // const styleElement = document.createElement("style");
    // let count = 1;
    // Arr.forEach((color) => {
    //   const cssRule = `.cls-16 {fill : ${color}}`;
    //   styleElement.appendChild(document.createTextNode(cssRule));
    //   count++;
    // });
    // document.head.appendChild(styleElement);
    const element = document.getElementById('template')

    element.style.setProperty("--cBack", obj[0]);
    element.style.setProperty("--back", obj[1]);
    element.style.setProperty("--bubble", obj[2]);
    element.style.setProperty("--nav", obj[3]);
    element.style.setProperty("--sFont", obj[4]);
}