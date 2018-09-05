let readlineSync = require(`readline-sync`);

let userName = readlineSync.question('May I have your name? ');
//Intro

do {

console.log(`Welcome to Haunted Mansion, ${userName}\!`);

console.log('In this manor we ask you to pay attention to your current location: Foyer. As you will need to escape before you are considered an extension of the Manor.');

let choices = readlineSync.question(`Please select which room you would like to enter: Dining Hall, Billiard Room, Observatory?`);

//Switch statement main game
switch(choices) {
  case "Dining Hall":

        console.log('You notice ghostly figures around the table. A newspaper with your name and memories framed in pictures.');
        let dhchoices = readlineSync.question('Two doors in this room. Select wisely: left or right?');

        if (dhchoices==='left') {
          console.log('You have entered the Observatory.')
          let obdchoice = readlineSync.question('Looking around you notice that a bookshelf and a candle sconce in a room with a bright lamp, what do you inspect bookshelf or candle?')
          if (obdchoice==='bookshelf') {
            console.log('As you inspect the bookshelf you notice that it does not move, and move on to the candle. You are able to move the candle and rotate it half way clockwise. SUCCESSFULLY ESCAPED!');
          } else if (obdchoice==='candle') {
            console.log('You are able to move the candle and rotate it half way clockwise. SUCCESSFULLY ESCAPED!');
          } else {
            let typo1 = readlineSync.question('Please enter a valid response bookshelf or candle?')
            if (typo1==='bookshelf') {
              console.log('As you inspect the bookshelf you notice that it does not move, and move on to the candle. You are able to move the candle and rotate it half way clockwise. SUCCESSFULLY ESCAPED!');
            } else {
                console.log('You are able to move the candle and rotate it half way clockwise. SUCCESSFULLY ESCAPED!');
            }
          }
        } else if (dhchoices==='right') {
          console.log('You are in the Billiard Room.')
          let brdchoice = readlineSync.question('There is nothing in this room but a broken pool stick and dusty lamps door you came in from has dissapeared...GAME OVER.')
        } else {
          console.log('Your lack of attention to detail has caused you to become one with the Manor, GAME OVER.');
        }
        break;

case "Billiard Room":

        console.log('You are now in the Billiard Room. It appears as if someone left the game abruptly and theres a broken stick laying on the floor.');
        let brchoice = readlineSync.question('Do you wish to inpect the pool sticks on the wall, maybe there\'s a secret passage yes / no ?')
        if (brchoice==='yes') {
          console.log('The sticks are simply just sticks. The door has dissapeared and there is no exit. GAME OVER.')
        } else {
          console.log('You may not want to continue, but there is an escape. GAME OVER.')
        }
        break;

case "Observatory":

        console.log('You have entered the observatory.');
        let obdchoice = readlineSync.question('Looking around you notice that a bookshelf and a candle sconce in a room with a bright lamp, what do you inspect bookshelf or candle?')
        if (obdchoice==='bookshelf') {
          console.log('As you inspect the bookshelf you notice that it does not move, and move on to the candle. You are able to move the candle and rotate it half way clockwise. SUCCESSFULLY ESCAPED!');
        } else if (obdchoice==='candle') {
          console.log('You are able to move the candle and rotate it half way clockwise. SUCCESSFULLY ESCAPED!');
        } else {
          let typo1 = readlineSync.question('Please enter a valid response bookshelf or candle?')
          if (typo1==='bookshelf') {
            console.log('As you inspect the bookshelf you notice that it does not move, and move on to the candle. You are able to move the candle and rotate it half way clockwise. SUCCESSFULLY ESCAPED!');
          } else {
              console.log('You are able to move the candle and rotate it half way clockwise. SUCCESSFULLY ESCAPED!');
          }
        }
        break;

default:

        console.log('Please select an appropriate room.')
        break;
}

var retry = readlineSync.question('Do you want to retry yes / no ?')

if (retry==='yes')  {

} else if (retry==='no'){

} else {
  console.log('Invalid.')
}

} while (retry==='yes');
