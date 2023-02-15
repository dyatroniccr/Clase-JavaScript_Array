let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

//your code here
let stopValue = mySampleArray.length;
let newReverseArray = [];

for (let i = 0; i < stopValue; i++) {
    let indexArr = mySampleArray.length - 1 - i;
    newReverseArray[i] = mySampleArray[indexArr];
    console.log(newReverseArray[i]);
}

