const containerContainer = document.querySelector('#container-container');

let answerSelect = '';
let fullLife = 4;
let enemyLife = fullLife;
let heroLife = fullLife;

let quest01 = {
  question: "What is an example of ice and gravity creating and moving sediments?",
  answers: ['glaciers move ','icebergs float', 'frost on grass'],
  bestAnswer: 'a'
}

let quest02 = {
  question: "How might an eathquake change the land?",
  answers: ['hardening the ground', 'lowering or raising the ground', 'making a canyon'],
  bestAnswer: 'b'
}

let quest03 = {
  question: "What does rain help create on the land?",
  answers: ['oceans', 'limestone caves', 'glaciers'],
  bestAnswer: 'b'
}

let quest04 = {
  question: "which fossil indicates the oldest layer of rock?",
  answers: ['trilobite', 't-rex', 'mammoth'],
  bestAnswer: 'a'
}

let questNum = 0;

let questSet = [
  quest01,
  quest02,
  quest03,
  quest04
];

let currentQuest = questSet[questNum];

let gameTitleVar = document.createElement('div');
gameTitleVar.style.display = "inline-block";
gameTitleVar.style.justifySelf = "center";
gameTitleVar.style.backgroundImage = "url('images/game-title.png')";
gameTitleVar.style.backgroundSize = "contain";
gameTitleVar.style.width = "8vw";
gameTitleVar.style.height = "7vw";  
gameTitleVar.style.id = "game-title";
gameTitleVar.style.position = "absolute";
gameTitleVar.style.top = "0";
gameTitleVar.style.zIndex = "9";

let gameContainerVar =  document.createElement('div');
gameContainerVar.style.backgroundColor = "black";
gameContainerVar.style.display = "flex";
gameContainerVar.style.flexFlow = "column nowrap";
gameContainerVar.style.id = "game-container";
gameContainerVar.style.alignItems = "center";
gameContainerVar.style.justifyItems = "center";
gameContainerVar.style.fontFamily = "Arial, serif";
gameContainerVar.style.fontSize = "2vw";
gameContainerVar.style.position = "absolute";
gameContainerVar.style.zIndex = "0";
gameContainerVar.style.color = "white";
gameContainerVar.style.width = "90vw";
gameContainerVar.style.height = "50vw";

let levelVar = document.createElement('div');
levelVar.style.display = "flex";
levelVar.style.flexDirection = "column";
levelVar.style.alignItems = "center";
levelVar.style.justifyItems = "center";   
levelVar.style.width = "70vw";
levelVar.style.height = "25vw";   
levelVar.style.id = "level";

let backGroundVar = document.createElement('div');
backGroundVar.style.backgroundImage = "url('images/background.png')";
backGroundVar.style.backgroundSize = "cover";
backGroundVar.style.width = "70vw";
backGroundVar.style.height = "25vw";
backGroundVar.style.id = "back-ground";

let charactersVar = document.createElement('div');
charactersVar.style.display = "flex";
charactersVar.style.flexFlow = "row nowrap";
charactersVar.style.justifyContent = "space-between";
charactersVar.style.position = "absolute";
charactersVar.style.top = "15vw";
charactersVar.style.width = "50vw";
charactersVar.style.id = "characters";

let heroVar = document.createElement('div');
heroVar.style.display = "block";
heroVar.style.width = "5vw";
heroVar.style.height = "5vw";
heroVar.style.postion = "absolute";
heroVar.style.top = "30vw";
heroVar.style.backgroundImage = "url('images/hero.png')";
heroVar.style.backgroundSize = "cover";
heroVar.style.id = "hero";

let enemyVar = document.createElement('div');
enemyVar.style.display = "inline-block";
enemyVar.style.width = "10vw";
enemyVar.style.height = "10vw";  
enemyVar.style.backgroundImage = "url('images/enemy.png')";
enemyVar.style.backgroundSize = "cover";
enemyVar.style.id = "enemy";


let  quizVar = document.createElement('div');
quizVar.style.display = "flex";
quizVar.style.flexFlow = "row nowrap";
quizVar.style.paddingTop = "1vw";
quizVar.style.justifyContent = "center";
quizVar.style.postion = "absolute";
quizVar.style.left = "10vw";
quizVar.style.width = "70vw";
quizVar.style.height = "8vw";
quizVar.style.id = "quiz";

let questVar = document.createElement('div');
questVar.style.backgroundColor = "clear";
questVar.style.color = "white";
questVar.style.borderStyle = "solid";
questVar.style.marginRight = "5vw";
questVar.style.borderRadius = "9%";
questVar.style.borderColor = "rgb(235, 235, 235)";
questVar.style.fontSize = "2vw";
questVar.style.id = "quest";

let  responsesVar = document.createElement('div');
responsesVar.style.color = "rgb(139, 139, 139)"; 
responsesVar.style.width = "30vw";
responsesVar.style.height = "10vw";
responsesVar.style.borderColor = "rgb(235, 235, 235)"; 
responsesVar.style.id = "responses";

let choiceAVar = document.createElement('div');
choiceAVar.style.color = "white";  
choiceAVar.style.borderColor = "rgb(235, 235, 235)";
choiceAVar.style.padding = "0.5vw 0.5vw 0.5vw 3vw";
choiceAVar.style.borderStyle = "solid";
choiceAVar.style.borderWidth = "0.5vw";
choiceAVar.style.borderRadius = "9%";
choiceAVar.style.backgroundImage = "url('images/sword-a.png";
choiceAVar.style.backgroundRepeat = "no-repeat";
choiceAVar.style.backgroundSize = "2vw";
choiceAVar.style.height = "4vw";
choiceAVar.style.id = "choice-a";


let  choiceBVar = document.createElement('div');
choiceBVar.style.color = "white";  
choiceBVar.style.borderColor = "rgb(235, 235, 235)";
choiceBVar.style.padding = "0.5vw 0.5vw 0.5vw 3vw";
choiceBVar.style.borderStyle = "solid";
choiceBVar.style.borderWidth = "0.5vw";
choiceBVar.style.borderRadius = "9%";
choiceBVar.style.backgroundImage = "url('images/sword-b.png";
choiceBVar.style.backgroundRepeat = "no-repeat";
choiceBVar.style.backgroundSize = "2vw";
choiceBVar.style.height = "4vw";
choiceBVar.style.id = "choice-b";

let choiceCVar = document.createElement('div');
choiceCVar.style.color = "white";  
choiceCVar.style.borderColor = "rgb(235, 235, 235)";
choiceCVar.style.padding = "0.5vw 0.5vw 0.5vw 3vw";
choiceCVar.style.borderStyle = "solid";
choiceCVar.style.borderWidth = "0.5vw";
choiceCVar.style.borderRadius = "9%"; 
choiceCVar.style.backgroundImage = "url('images/sword-c.png";
choiceCVar.style.backgroundSize = "2vw";
choiceCVar.style.height = "4vw";
choiceCVar.style.backgroundRepeat = "no-repeat";
choiceCVar.style.id = "choice-c";


function clearAll() {

  charactersVar.removeChild(charactersVar.firstChild);
  charactersVar.removeChild(charactersVar.firstChild);
  choiceAVar.removeChild(choiceAVar.firstChild);
  choiceBVar.removeChild(choiceBVar.firstChild);
  choiceCVar.removeChild(choiceCVar.firstChild);
  responsesVar.removeChild(responsesVar.firstChild);
  responsesVar.removeChild(responsesVar.firstChild);
  responsesVar.removeChild(responsesVar.firstChild);
  questVar.removeChild(questVar.firstChild);
  quizVar.removeChild(quizVar.firstChild);
  heroVar.removeChild(heroVar.firstChild);
  enemyVar.removeChild(enemyVar.firstChild);
  levelVar.removeChild(levelVar.firstChild);
  containerContainer.removeChild(containerContainer.firstElementChild);
  containerContainer.removeChild(containerContainer.firstElementChild); 

  return
}


function populate() {
  containerContainer.appendChild(gameTitleVar);
  containerContainer.appendChild(gameContainerVar);
  gameContainerVar.appendChild(levelVar);
  levelVar.appendChild(backGroundVar);
  levelVar.appendChild(charactersVar);
  charactersVar.appendChild(heroVar);
  charactersVar.appendChild(enemyVar);

  let enemyLifeContent = document.createTextNode(enemyLife.toString());
  enemyVar.appendChild(enemyLifeContent);
  let heroLifeContent = document.createTextNode(heroLife.toString());
  heroVar.appendChild(heroLifeContent);

  gameContainerVar.appendChild(quizVar);
  quizVar.appendChild(questVar);
  let questContent = document.createTextNode(currentQuest["question"]);
  questVar.appendChild(questContent);
  quizVar.appendChild(responsesVar);
  responsesVar.appendChild(choiceAVar);
  responsesVar.appendChild(choiceBVar);
  responsesVar.appendChild(choiceCVar);
  let choiceAContent = document.createTextNode(currentQuest["answers"][0]);
  choiceAVar.appendChild(choiceAContent);
  let choiceBContent = document.createTextNode(currentQuest["answers"][1]);
  choiceBVar.appendChild(choiceBContent);
  let choiceCContent = document.createTextNode(currentQuest["answers"][2]);
  choiceCVar.appendChild(choiceCContent);
  console.log('poplulated');
  return 
}

function win() {
  let winVar =  document.createElement('div');
  winVar.style.backgroundColor = "none";
  winVar.style.backgroundImage = "url('images/win.png')";
  winVar.style.backgroundSize = "cover";
  winVar.style.width = "40vw";
  winVar.style.height = "40vw";
  winVar.style.id = "win";
  winVar.style.position = "absolute";
  winVar.style.top = "0px";
  let winMessage = "Points " + heroLife.toString();
  containerContainer.appendChild(gameTitleVar);
  containerContainer.appendChild(gameContainerVar);
  gameContainerVar.appendChild(levelVar);
  levelVar.appendChild(winVar);
  let winContent = document.createTextNode(winMessage);
  winVar.appendChild(winContent);
}

function lose() {
  let loseVar =  document.createElement('div');
  loseVar.style.backgroundColor = "none";
  loseVar.style.backgroundImage = "url('images/lose.png')";
  loseVar.style.backgroundSize = "cover";
  loseVar.style.width = "40vw";
  loseVar.style.height = "40vw";
  loseVar.style.id = "lose";
  loseVar.style.position = "absolute";
  loseVar.style.top = "0px";
  containerContainer.appendChild(gameTitleVar);
  containerContainer.appendChild(gameContainerVar);
  gameContainerVar.appendChild(levelVar);
  levelVar.appendChild(loseVar);
}

function checkAnswer() {
  if (questNum < 4) {  
    if (answerSelect == currentQuest["bestAnswer"]) {
      enemyLife--;
    } else {
      heroLife--;
      heroContent = heroLife.toString()
    }
    questNum++;
    currentQuest = questSet[questNum];
  }
  if (questNum == 4) {
    if (heroLife == enemyLife) {
      clearAll();
      lose();
      return
    } else if (enemyLife <= heroLife) {
      clearAll();
      win();
      return
    }
  }
  clearAll();
  populate();
  return
}

function clickChoiceA() {
  answerSelect = 'a';
  checkAnswer();
  return 
}

function clickChoiceB() {
  answerSelect = 'b';
  checkAnswer();
  return
}

function clickChoiceC() {
  answerSelect = 'c';
  checkAnswer();
  return
}

populate();

choiceAVar.addEventListener('click', clickChoiceA);
choiceBVar.addEventListener('click', clickChoiceB);
choiceCVar.addEventListener('click', clickChoiceC);