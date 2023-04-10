import characterData from "./data.js";
import Character from "./character.js";

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

function attack(){
  wizard.getDiceHtml()
  orc.getDiceHtml()
  wizard.takeDamage(orc.currentDiceScore)
  orc.takeDamage(wizard.currentDiceScore)
 render()

 if (wizard.dead || orc.dead) {
  endGame()
 }
}

function endGame(){
  const endMessage = wizard.dead && orc.dead ? 'No victors - all creatures are dead' : orc.dead ? 'Wizard wins' : 'The Orc is Victorious'
  console.log(endMessage)
}

document.getElementById("attack-button").addEventListener('click', attack)

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();
