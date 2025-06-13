let número;

console.log("Você digitou o número ${número}, ");

do{
  numero = prompt("Insira um número de 1 a 10: ")
} while(numero < 1 || numero > 10)