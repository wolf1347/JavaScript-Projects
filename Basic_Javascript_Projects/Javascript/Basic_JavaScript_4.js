function DnD_Dictionary() {
    var PlayerCharacter = {
        Name:"Taako",
        Race:"Elf",
        Class:"Wizard",
        Alignment:"True Neutral",
        Level:"5",
    };
    delete PlayerCharacter.Class;
    document.getElementById("Dictionary").innerHTML = PlayerCharacter.Class;
}