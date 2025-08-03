//Importações do projeto
let teclado = require('prompt-sync')();
   
//Entrada
let win = teclado("Informe o número de vitórias: ");
let lost = teclado("Informe o número de derrotas: ");

let win1 = Number(win);
let lost1 = Number(lost);
let nivel = getlevelers(win1, lost1);
let nivel1 = Number(nivel);
let categoria = getLevel(nivel1);

function getlevelers(win, lost){
     // Processamento 
    let level = win - lost;
    return level;
}   
function getLevel(nivel1){
    let level = nivel1;
   if (level<=10)
      level = "Ferro";
   else if (level> 10 && level<=20)
       level = "Bronze";
   else if (level> 20 && level<=50)
       level = "Prata";
   else if (level> 50 && level<=80)
       level = "Ouro";
   else if (level> 80 && level<=90)
       level = "Diamante";  
   else if (level> 90 && level<=100)
       level = "Lendário"
   else
        level = "Imortal";
   
   return level;
}
   
//Saída    
    console.log ("O Herói possui " + nivel1 + " de saldo " + "e está no nível " + categoria);     