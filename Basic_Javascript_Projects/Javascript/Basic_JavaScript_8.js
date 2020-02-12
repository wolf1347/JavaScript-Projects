function Concatenate_Function() {
    var part_1 = "All ";
    var part_2 = "dogs ";
    var part_3 = "go ";
    var part_4 = "to ";
    var part_5 = "heaven.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All dogs are good dogs";
    var Section = Sentence.slice(4,17);
    document.getElementById("Slice").innerHTML = Section;
}

function uppercaseFunction() {
var str = "bark";
var res = str.toUpperCase();
document.getElementById("demo").innerHTML = res + (" (V●ᴥ●V)");
}

function searchFunction() {
    var str = "How far in does Dog appear in this sentence";
    var n = str.search("Dog");
    document.getElementById("searching").innerHTML = n;
}

function string_Method() {
    var X =500;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}

function precision_Method() {
    var X= 1285.1566887423;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
  
function fixed_Function() {
    var num= 3.1415926535;
    var n = num.toFixed(2);
    document.getElementById("FixedDecimal").innerHTML = n;
}

function ValueOf_Function() {
    var str = "Scratch a dog and you will find a permanent job.";
    var res = str.valueOf();
    document.getElementById("ValueOf").innerHTML = res;
}