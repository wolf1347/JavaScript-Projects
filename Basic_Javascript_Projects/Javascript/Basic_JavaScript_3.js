window.alert(Math.trunc(Math.random() * 100));

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

function division_Function() {
    var simple_Math = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2-5;
    document.getElementById("Math5").innerHTML = "(1+2) * 10 / 2-5 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

document.write("<br>")

var Y = 5.25
Y--;
document.write(Y);

document.write("<br>")

var Z= Math.sqrt(100);
document.write(Z);
