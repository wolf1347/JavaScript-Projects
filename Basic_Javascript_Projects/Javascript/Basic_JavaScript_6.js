function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "Too bad, you are not old enough":"Congratulations, you are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;    
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Cat(Name, Gender, Breed) {
    this.Cat_Name = Name;
    this.Cat_Gender = Gender;
    this.Cat_Breed = Breed;
}

var Jazz = new Cat ("Jazz", "Male", "Maine Coon");
function myCat () {
    document.getElementById("New_and_This").innerHTML = 
    "My oldest cat is named " + Jazz.Cat_Name + " and is a " + Jazz.Cat_Gender + " " + Jazz.Cat_Breed;
}

function Resident(Name, Age, Species, Gender) {
    this.Resident_Name = Name;
    this.Resident_Age = Age;
    this.Resident_Species = Species;
    this.Resident_Gender = Gender;
}

var Matt = new Resident ("Matt", 28, "Human", "Male");
var Amber = new Resident ("Amber", 28, "Human", "Female");
var Jazzy = new Resident ("Jazz", 10, "Cat", "Male");
var Leo = new Resident ("Leo", 8, "Cat", "Male");
var SweetPea = new Resident ("Sweet Pea", 6, "Cat", "Male");
var Trixie = new Resident ("Trixie", 8, "Cat", "Female");
var Deku = new Resident ("Deku", 1, "Dog", "Male");

function householdFunction() {
    document.getElementById("Household_Residents_Cats").innerHTML = 
    "Our cats are " + Jazzy.Resident_Name + " " + Leo.Resident_Name + " " + SweetPea.Resident_Name + " and " + Trixie.Resident_Name;
}

function householdFunction2() {
    document.getElementById("Household_Residents_Dogs").innerHTML = 
    "Our dogs are " + Deku.Resident_Name;
}

function householdFunction3() {
    document.getElementById("Household_Residents_Humans").innerHTML = 
    "The owners/humans in the household are "  + Matt.Resident_Name + " and " + Amber.Resident_Name;
}


function nested_Function() {
    document.getElementById("NestedFunction").innerHTML = Count () + " cats in the house";
    function Count () {
        var Starting_point = 3;
        function Plus_one () {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

