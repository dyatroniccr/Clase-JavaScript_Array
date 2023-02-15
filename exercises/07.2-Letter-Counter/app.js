let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let newPar = par.toLowerCase().replaceAll(' ', '');

for(i=0; i<newPar.length; i++){
    let letra = newPar[i];
    console.log(letra);
    if (letra in counts){
        console.log(newPar[i]);
    } else {
        //let obj= {letra: 1};
        //counts.push(obj);
    }
    
}
console.log(counts);