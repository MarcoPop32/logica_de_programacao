// function dobrar(num){
//     valor = num*2
//     return num
// }

// let valorString = prompt("Digite um valor e eu darei o dobro dele");
// let valor = parseInt(valorString)

// if (isNaN(valor)){
//     console.log("Valor inválido!")
// }else {
// console.log(dobrar(valor));
// console.log(valor);
// }

// Parâmetros opcionais
 function saudacao(nome = "Visitante"){
     return `Olá, ${nome}!`;
 }
 saudacao()
 console.log(saudacao("Bananilson"));

