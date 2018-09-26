const spanishWords = {
  seasons: "temporadas",
  greetings: "saludos",
  and: "y",
  happy: "felices",
  holidays: "fiestas"
  }
  
const croatianWords = {
  seasons: "godišnje",
  greetings: "pozdrave",
  and: "I",
  happy: "sretne",
  holidays: "praznike"
  }
  
const italianWords = {
  seasons: "saluti",
  greetings: "stagionali",
  and: "e",
  happy: "buone",
  holidays: "feste"
}

const spanishButton = document.getElementById("spanish");
spanishButton.addEventListener("click", () => {
  let userInput = document.getElementById("text").value;
  let splitUserInput = userInput.split(' ');
  for (let i = 0; i< splitUserInput.length; i++){
      if(splitUserInput[i] === "seasons"){
          document.getElementById("translatedWord").innerHTML += ` ${spanishWords.seasons} `;
      }
      else if(splitUserInput[i] === "greetings"){
          document.getElementById("translatedWord").innerHTML += ` ${spanishWords.greetings} `;
      }
      else if(splitUserInput[i] === "and"){
          document.getElementById("translatedWord").innerHTML += ` ${spanishWords.and} `;
      }
      else if(splitUserInput[i] === "happy"){
          document.getElementById("translatedWord").innerHTML += ` ${spanishWords.happy} `;
      }
      else if(splitUserInput[i] === "holidays"){
          document.getElementById("translatedWord").innerHTML += ` ${spanishWords.holidays} `;
      }
      else {
           document.getElementById("translatedWord").innerHTML += "Huh?";
       }
  }
  clearTextBox();
})

const croatianButton = document.getElementById("croatian");
croatianButton.addEventListener("click", () => {
  let userInput = document.getElementById("text").value;
  let splitUserInput = userInput.split(' ');
  for (let i = 0; i< userInput.length; i++){
      if(splitUserInput[i] === "seasons"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${croatianWords.seasons} `;
      }
      if(splitUserInput[i] === "greetings"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${croatianWords.greetings} `;
      }
      if(splitUserInput[i] === "and"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${croatianWords.and} `;
      }
      if(splitUserInput[i] === "happy"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${croatianWords.happy} `;
      }
      if(splitUserInput[i] === "holidays"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${croatianWords.holidays} `;
      }
  }
  clearTextBox();
})

const ItalianButton = document.getElementById("italian");
ItalianButton.addEventListener("click", () => {
  let userInput = document.getElementById("text").value;
  let splitUserInput = userInput.split(' ');
  for (let i = 0; i< userInput.length; i++){
      if(splitUserInput[i] === "seasons"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.seasons} `;
      }
      if(splitUserInput[i] === "greetings"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.greetings} `;
      }
      if(splitUserInput[i] === "and"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.and} `;
      }
      if(splitUserInput[i] === "happy"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.happy} `;
      }
      if(splitUserInput[i] === "holidays"){
          phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.holidays} `;
      }
  }
  clearTextBox();
})
let clearTextBox = ("click", () => {
  document.getElementById("text").value = '';
});