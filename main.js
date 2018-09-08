// SPANISH

const spanish = {
seasons: "temporadas",
greetings: "saludos",
and: "y",
happy: "felices",
holidays: "fiestas"
};

// CROATIAN

const croatian = {
seasons: "godišnje",
greetings: "pozdrave",
and: "I",
happy: "sretne",
holidays: "praznike"
};

// ITALIAN 

const italian = {
seasons: "saluti",
greetings: "stagionali",
and: "e",
happy: "buone",
holidays: "feste"
};

let spanishButton = document.getElementById("spanish__button");
let croatianButton = document.getElementById("croatian__button");
let italianButton = document.getElementById("italian__button");

const printToDom = (stringToPrint, divId) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = stringToPrint;
};

const toSpanish = () => {
let inputText = document.getElementById("input__field").value;
printToDom(inputText, "translate__div");
};

const toCroatian = () => {
let inputText = document.getElementById("input__field").value;
printToDom(inputText, "translate__div");
};

const toItalian = () => {
let inputText = document.getElementById("input__field").value;
printToDom(inputText, "translate__div");
};

spanishButton.addEventListener("click", toSpanish);
croatianButton.addEventListener("click", toCroatian);
italianButton.addEventListener("click", toItalian);
