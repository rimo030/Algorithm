const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    result = '';
    for(let i = 0 ; i < str.length ; i++){
        let char = str.at(i)
        if(char >= 'A' && char <= 'Z' ) {
            result += char.toLowerCase();
        }
        else {
            result += char.toUpperCase(); 
        }
    }
   
    console.log(result);
   
});