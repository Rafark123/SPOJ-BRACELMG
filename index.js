// :)
// function to calculate the area
function area(length , breadth){
    return length * breadth;
 }
 
 process.stdin.resume();
 process.stdin.setEncoding('utf-8');
 
 let input = "";
 let inputArr = "";
 let currentLine = 0;
 
 process.stdin.on('data', function (data) {
   input += data;
 });
 
 process.stdin.on('end', function () {
   main(input);
 });
 
 function readLine() {
   return inputArr[currentLine++];
 }
 
function main(input) {
        let braceletes = processInfo(input)
        braceletes.forEach(element => {
           bracelete = element.split(' ')[1] + element.split(' ')[1]
           proibido = element.split(' ')[0]
           proibidoI = invertString(proibido)
    
           if(bracelete.includes(proibido) || bracelete.includes(proibidoI)){
                console.log(`S`)
            }else{
                console.log('N')
            }
        
    
        });
}

function processInfo(entrada){
    let entradaS = entrada.split(`\n`)
    let numTestes = entradaS[0]
    entradaS.shift()
    let output = []
    for (let i = 0; i < numTestes; i++) {
            output.push(entradaS[i])
    }
    return output
    }
    function invertString(string){
    let stringS = string.split(``)
    let output = []
        for (let i = stringS.length; i != 0; i--) {
    
            output.push(stringS[i-1])
    
        }
    return output.join('')
    }
    
   
