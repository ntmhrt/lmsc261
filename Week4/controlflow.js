/*
let midinote = prompt("Enter midi note")
let isValidMidiNote = midinote  >= 0 && midinote <= 127;


let isValidMidiNote = midinote  >= 0 || midinote <= 127; 



if (isValidMidiNote < 127){
    print("Yay! It's a valid Midi note!")
}else {
    print("quit music")
}

//

for(let t = 0; t < 8; t++)
{
    print(t);
}

//

let t = 4;
while(t < 10)
{
    print(t);
    t++;
}

*/
let minNameLength = true;
let nameInput;

while(minNameLength)
{
    nameInput = prompt("Please Enter Name: ")
    if (nameInput.length >= 6)
        {
            minNameLength = false;
        } 
}
