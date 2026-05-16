// criando variaveis
let nome = prompt("Qual seu nome?"); //string
// convertendo string para number
let idade = Number.parseInt(prompt("Qual sua idade?")); 
let cursos = Number.parseInt(prompt("Quantos cursos você já fez?"));
let projetos = Number.parseInt(prompt("Em quantos projetos você já trabalhou?"));
let horas = Number.parseInt(prompt("Quantas horas você estudou?"));
// variável para guardar cada resultado
let pontoscurso = cursos * 100 
let pontoshora =  horas * 20
let pontosprojetos = projetos * 150
// variável para guardar pontos totais com incrementação e decrementação
let total = pontoscurso-- + pontoshora++ + pontosprojetos++
// exibir na tela
alert(pontoscurso);
alert(pontoshora);
alert(pontosprojetos);
// resultado com concatenação
alert("A soma total de pontos de " + nome + " é de " + total + " pontos."); 