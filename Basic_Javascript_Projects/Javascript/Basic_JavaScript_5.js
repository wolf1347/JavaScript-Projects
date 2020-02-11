document.write(typeof 1);

    document.write("<br>");

document.write(typeof "bananas");

    document.write("<br>")
    document.write("<br>")

document.write(20 > 3);

    document.write("<br>")

document.write(20 < 3);

    document.write("<br>")
    document.write("<br>")

document.write("10"+5);

    document.write("<br>")
    document.write("<br>")

document.write(20 == 20);

    document.write("<br>")

document.write(20 == 3);

    document.write("<br>")
    document.write("<br>")

A= "Dog";
B= "Dog";
C= 12;
D= "12";


document.write(A===B);

    document.write("<br>")

document.write(A===C) ;

    document.write("<br>")

document.write(C===D) ;

    document.write("<br>")

document.write(A==="B");

    document.write("<br>")
    document.write("<br>")

document.write(4 > 5 && 4 < 5)
    document.write("<br>")
document.write(4 > 3 && 4 < 5)

    document.write("<br>")

document.write(4 > 5 || 4 < 5)
    document.write("<br>")
document.write(4 > 3 || 4 < 5)

    document.write("<br>")

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("bananas");
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN("1");
}

function positive_Function() {
    document.getElementById("positive_Infinate").innerHTML=(4E500);
}

function negative_Function() {
    document.getElementById("negative_Infinate").innerHTML=(-4E500);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(4>5);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(4<5);
}

console.log (2+2);
console.log (4<5);
console.log (4>5);
console.log (4 < 5 & 4 > 3);
console.log (4 < 5 & 4 > 5);
