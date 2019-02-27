let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let hex = document.getElementById("hex");

red.oninput = InputEvent;
green.oninput = InputEvent;
blue.oninput = InputEvent;

hex.onchange = (function () {
    document.getElementById("colorBox").style.backgroundColor = hex.value;
});

function InputEvent() {
    event.target.value = LimitRGB(event.target);
    hex.value = ConvertToHex(parseInt(red.value), parseInt(green.value), parseInt(blue.value));
    hex.dispatchEvent(new Event('change'));
}

/**
 * @return {number}
 */
function LimitRGB(target) {
    let rgbValue = target.value;

    if (rgbValue > 255) {
        return 255;
    }
    else if (rgbValue < 0 || isNaN(rgbValue)) {
        return 0;
    }
    else {
        return rgbValue
    }
}

/**
 * @return {string}
 */
function ConvertToHex(r, g, b) {
    if (isNaN(r)) {
        r = 0;
    }

    if (isNaN(g)) {
        g = 0;
    }

    if (isNaN(b)) {
        b = 0;
    }
    return '#'
        + r.toString(16).padStart(2, '0')
        + g.toString(16).padStart(2, '0')
        + b.toString(16).padStart(2, '0');
}