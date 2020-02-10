var A="Cat";
var B="Dog";

function CatDog() {
    document.write(A+B);
}

function changeColor(newColor) {
    var elem=document.getElementById('color-button');
    elem.style.color=newColor;
}

function myFunction() {
    var sentence = "I am learning";
    sentence +=" a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}