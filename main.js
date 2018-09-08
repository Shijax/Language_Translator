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

const spanishButton = document.getElementById("spanish__button");
const croatianButton = document.getElementById("croatian__button");
const italianButton = document.getElementById("italian__button");

const printToDom = (stringToPrint, divId) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = stringToPrint;
};

// const myLanguage = {
//   'french': french,
//   'spanish': spanish,
//   'german': german,
// }

// let translateStore = '';
// let translateString = '';
// let wordStore = '';
// let language = '';
// let wordArray = '';

// function createWordStore() {
//   document.getElementById('buttonsDiv').addEventListener('click', function() {
//       wordStore = document.getElementById('textInput').value;
//       if(event.target.id !== 'lucky') {
//           language = event.target.id;
//           createTranslateStore(language);
//       }  
//   } );    
// }

// function createTranslateStore(lang) {
//   wordArray = Object.getOwnPropertyNames('french')
//   for(let i = 0; i < wordArray.length; i++) {
//       if(wordArray[i] = wordStore) {
//           translateStore = wordArray[i];
//           createTranslateString(translateStore, lang);
//           break;
//       }
//       else {
//           printToDom("Im sorry, I only know seven words plus this phrase explaining that fact");
//       }
//   }
    
// }

// function createTranslateString(word, lng) {
//   translateString = myLanguage[lng][word];
//   console.log(translateString);
//   printToDom(translateString);
// }

// function printToDom(string) {
//   const div = document.getElementById('textOutput');
//   div.innerHTML = string;
// }

// function lucky() {
//   document.getElementById('lucky').addEventListener('click', function() {
//       wordStore = document.getElementById('textInput').value;
//       let rando = Math.floor((Math.random() * 3) + 1);
//       if(rando === 1) {
//           language = 'french';
//       }
//       else if(rando === 2) {
//           language = 'spanish';
//       }
//       else if(rando === 3) {
//           language = 'german';
//       }
//       createTranslateStore(language);
// } );
// }

// createWordStore();
// lucky();