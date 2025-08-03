//Importações do projeto
let teclado = require('prompt-sync')();
   
//Entrada
let nome = teclado("Informe o nome do jogador: ");
let qtde_xp = teclado("Informe a quantidade de XP recebidos: ");
let nivel;

// Processamento
let qtd_xp = parseInt(qtde_xp);
if (qtd_xp<=1000)
    nivel = "Ferro";
else if (qtd_xp> 1000 && qtd_xp<=2000)
    nivel = "Bronze";
else if (qtd_xp> 2000 && qtd_xp<=5000)
    nivel = "Prata";
else if (qtd_xp> 5000 && qtd_xp<=6000)
     nivel = "Ouro";
else if (qtd_xp> 6000 && qtd_xp<=8000)
      nivel = "Platina";  
else if (qtd_xp> 8000 && qtd_xp<=9000)
     nivel = "Ascendente"
else if (qtd_xp> 9000 && qtd_xp<=10000)
     nivel = "Imortal";
    else
        nivel = "Radiante";   
//Saída    
    console.log ("O Herói " + nome + " está no nível " + nivel);     