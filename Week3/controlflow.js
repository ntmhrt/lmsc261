//different actions for different conditions

/*
let numInstruments = prompt("how many instruments do you play?");
let isMultiInstrumentalist = numInstruments > 1;

if (isMultiInstrumentalist){
    print("wow!");
}

else {
print("that's enough");
}



let numInstruments = prompt("how many instruments do you play?");
let isAMusician = numInstruments == 1;
let isMultiInstrumentalist = numInstruments > 1;
if (isAMusician) {
    print("1 is more than enough!")
}else if (isMultiInstrumentalist){
    print("you are so cool!");
    
}else{
    print("I get it, music is hard");
}

*/

let randomTemp = Math.random(); // random between 0 ~ 1
randomTemp = ( randomTemp * 20 ) - 10; 
randomTemp = Math.floor(randomTemp); // get rid of the decimels

let isPositive = randomTemp >0;
let isNegative = randomTemp <0;
let isZero = randomTemp == 0;

print(randomTemp);
if (isPositive){
    print("it's getting warmer!")
}else if (isNegative){
    print("shit");
}else{
    print("Nobody touched the temp");
}