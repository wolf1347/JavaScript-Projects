function Call_Loop() {
    var Digit = "";
    var X = 0;
    while (X < 6) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String_Function() {
    var str = "Deku is a good boy"
    var n= str.length;
    document.getElementById("StringCharacters").innerHTML = n;
}

var Percussion_Instruments = ["Snare Drum","Timpani","Bass Drum","Marimba","Cymbal","Cowbell","Triangle","Bongo Drum","Cabasa","Claves","Xylophone","Wind Chimes"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Percussion_Instruments.length; Y++) {
        Content += Percussion_Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function pets_Function() {
    var Pet_Name = [];
    Pet_Name[0] = "Jazz";
    Pet_Name[1] = "Sweet Pea";
    Pet_Name[2] = "Leo";
    Pet_Name[3] = "Trixie";
    Pet_Name[4] = "Deku";
    document.getElementById("pets").innerHTML = "The oldest animal is " + Pet_Name[0] + " and the youngest is " + Pet_Name[4] +".";
}

function constant_Function() {
    const House_Pet = {species:"Cat", breed:"Maine Coon", color:"Orange"};
    House_Pet.species = "dog";
    House_Pet.name = "Deku";
    document.getElementById("constant").innerHTML = "We have a " + House_Pet.species + " who is named " + House_Pet.name;

}


var a = return_Function(5,6);
function return_Function(e,f) {
    return e+f;
}
document.getElementById("returned").innerHTML = a;


var x = "Cat"
document.write (x);
    {var x="Dog";
    document.write("<br>" + x);        
}
document.write("<br>" + x);

document.write("<br>");

var x = "Cat"
document.write (x);
    {let  x="Dog";
    document.write("<br>" + x);        
}
document.write("<br>" + x);

let cat = {
    breed: "Domestic ",
    coat: "short hair ",
    color: "cream ",
    name: "Sweet Pea ",
    description : function() {
        return "The youngest cat is named " + cat.name + "he is a " + cat.color + "colored " + cat.breed + cat.coat;
    }
};
document.getElementById("cat_description").innerHTML = cat.description();

function break_Function() {
var text = ""
var i;
for (i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    text +="The Count says  " + i + " ah ah ah" + "<br>";
    }  
document.getElementById("BreakExample").innerHTML = text;
}

function continue_Function() {
    var text = ""
    var j;
    for (j = 0; j < 5; j++) {
        if (j === 3) {
            continue;
        }
        text +="The Count says  " + j + " ah ah ah" + "<br>";
        }  
    document.getElementById("ContinueExample").innerHTML = text;
    }
