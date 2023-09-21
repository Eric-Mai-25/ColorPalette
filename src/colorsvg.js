
export function colorSvg(obj, height = '100%', width = '100%') {
    const element = document.getElementById('template')

    element.style.setProperty("--cBack", obj[0]);
    element.style.setProperty("--back", obj[1]);
    element.style.setProperty("--bubble", obj[2]);
    element.style.setProperty("--nav", obj[3]);
    element.style.setProperty("--sFont", obj[4]);

    element.style.width = height
    element.style.height = width
}