function Add_numbers_1() {
    var x=10;
    console.log(15 + x);
    document.write(15+x+"<br>");
}   

function Add_numbers_2() {
    var x=5
    console.log(x + 100);
    document.write(x + 100 + "<br>");
}

Add_numbers_1();
Add_numbers_2();

var y=6;

function Add_numbers_3() {
    console.log(y - 4);
    document.write(y - 4 + "<br>")
}

function Add_numbers_4() {
    console.log(y * 2)
    document.write(y * 2 + "<br>")
}

Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
    else {
        document.getElementById("Greeting").innerHTML="How are you this morning?";
    }
}

if (y == 6) {
    document.write("Hello");
}
else {
    document.write("Goodbye");
}

function Animal_Function() {
    Animal = document.getElementById("Animal").value;
    if (Animal=="cat") {
        Cat="Meow!";
    }
    else if (Animal =="Cat") {
        Cat="Meow!";
    }

    else {
        Cat="Hisssss";
    }
    document.getElementById("favorite_animal?").innerHTML= Cat;
}

function Time_function() {
    var Time = new Date ().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply="Good morning!";
    }
    else if (Time > 12  == Time < 18 ) {
        Reply="Good afternoon!";
    }
    else {
        Reply = "Good evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}