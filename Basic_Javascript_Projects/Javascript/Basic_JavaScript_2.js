
function CatDog() {
    var A="Cat";
    var B="Dog";
    document.write(A+B);
}

function changeColor(newColor) {
    var elem=document.getElementById('color-button');
    elem.style.color=newColor;
}

function myFunction() {
    var sentence = "A sentence";
    sentence +=" + operator should now display";
    document.getElementById("Concatenate").innerHTML = sentence;
}