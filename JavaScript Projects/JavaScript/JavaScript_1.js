function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " Pretty interesting, right?";
    switch (Animals) {
        case "Wolf":
            Animal_Output = "All wolves in a pack contribute to taking care of the pups which includes, hunting for, playing with, and babysitting!" + Animal_String;
        break;
        case "Owl":
            Animal_Output = "Owls are often used as a natural pest control for farmers!" + Animal_String;
        break;
        case "Fox":
            Animal_Output = "Foxes are capable of making about 40 different sounds and are very playful!" + Animal_String;
        break;
        case "Bear":
            Animal_Output = "A bear's claws are non-retractable kind of like a dog!" + Animal_String;
        break;
        case "Bat":
            Animal_Output = "Most bats will only have one pup a year and momma bats are able to identify their pup out of thousands just through unique sounds and scents!" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter your animal.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Bork_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "BORK BORK BORK (V●ᴥ●V)";
    A[1].innerHTML = "Just kidding it changed too"
}

function myCanvas() {
    var c = document.getElementById("DogCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("AnimeDog");
    ctx.drawImage(img,2,2);
    ctx.font="30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("BARK BARK!", 150, 40);
}