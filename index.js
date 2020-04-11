var h3_1 = document.querySelector(".color_1");
var h3_2 = document.querySelector(".color_2");

var color1 = document.getElementById("l_side");
var color2 = document.getElementById("r_side");
var body= document.getElementById("gradient");

var button = document.getElementById("btn");
var copyButton = document.getElementById("copy_btn");

//Activates randomizer
button.addEventListener("click", function(){
    setRandomColor();
} );



// Stack Overflow
function randomColors(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor(){
    //Store elements so they don't change midway
    var color1 = randomColors();
    var color2 = randomColors();
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`
    h3_1.textContent = `First Color ${color1} || `;
    h3_2.textContent = ` Second Color ${color2} `;

}


function starterColor(){
    h3_1.textContent = `First Color: ${color1.value} || `;
    h3_2.textContent = `Second Color: ${color2.value}`;
}

function colorChange() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    starterColor();
}

setRandomColor();


color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);


copyButton.addEventListener("click", function(){


    color1.select();
    color1.execCommand("copy");
    alert("Copied the text: " + color1.value);
})