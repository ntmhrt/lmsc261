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


// for -> Looping
// for ( slot 1 ; slot 2 ; ...)
// ( declare a number |  boolean / expression)
i += 5 // i = i + 5
i ++ // i += 1// i = i + 1;


for (let i = 0; i < 8; i++){
print("I'm now " + i);
print(" i ")
print ("years old")

}

let flavors = ["A", "B", "C"];
for (let flv = 0; flv < 3; flv += 1){
    print("you're flavor is; " );
    print(flavors[flv])
}

*/

let flavors = ["A", "B", "C"];

flavors.push("Banana Split");

const numIceCreamLeft = 12;

for (let customer = 0; customer < 10; customer += 1){
    if (customer < numIceCreamLeft){

    }

    /*
    print (customer);
    */

    print("you're flavor is; " );
    print(flavors[customer % flavors.length]);


}else {
    print ("Sorry we're closed")
}
