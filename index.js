// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(gifts) {
const newArray = [];
  for (let i = 0; i < gifts.length; i++) {
    newArray.push(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
  }

  return newArray;
}

writeCards(gifts);


function countDown(number){
    let i = 0;
    while (i <= number){
        console.log(number-i);
        i++
    }
}