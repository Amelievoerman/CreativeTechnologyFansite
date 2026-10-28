function veranderKleur() {
    let myThing = document.getElementById("harry");

    if (myThing.style.color == "hotpink") {
        myThing.style.color = "blue";
    } else if (myThing.style.color == "blue") {
        myThing.style.color = "yellow";
    } else {
        myThing.style.color = "hotpink";
    }
}



function veranderTekst() {
    let myThing = document.getElementById("bericht");
    myThing.innerHTML = "Maak nou de quiz hierboven!!";
}