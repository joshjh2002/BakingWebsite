var grams = true;
document.getElementById("grams").style.display = "block"
document.getElementById("ounces").style.display = "none"

function switchIngredients() {
    if (grams === true) {
        document.getElementById("grams").style.display = "none"
        document.getElementById("ounces").style.display = "block"
        document.getElementById("grams-ounces").innerHTML = "Switch to Grams"
        grams = false;
    } else {
        document.getElementById("grams").style.display = "block"
        document.getElementById("ounces").style.display = "none"
        document.getElementById("grams-ounces").innerHTML = "Switch to Ounces"
        grams = true;
    }
}