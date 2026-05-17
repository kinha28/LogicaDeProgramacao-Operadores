// criando variaveis
let nome = prompt("Qual seu nome?"); //string
// convertendo string para number
let idade = Number.parseInt(prompt("Qual sua idade?")); 
// variavel booleanas usando operadores racionais
let maiorIdade = idade >=18;
let Nome = nome == "maria";
// resultado usando operadores lógicos
alert(Nome && maiorIdade);
alert(Nome || maiorIdade);
alert(!maiorIdade)

let msg = maiorIdade ? "Maior de idade" : "Menor de idade";
alert(msg);