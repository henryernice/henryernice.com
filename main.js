let t = 0;
var fabulous = false;


function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function update() {
    t += 1;
    let color = rgbToHex(Math.abs(parseInt(Math.sin(t/100.0)*255)),Math.abs(parseInt(Math.cos(t/100.0)*255)),Math.abs(parseInt(Math.sin(t/100.0+Math.PI)*255)));
    document.getElementById("titlebox").style.backgroundColor = color;
    document.getElementById("leftmenu").style.backgroundColor = color;
}

