let número;

do{
  número = prompt("Insira um número de 1 a 10: ")
} while(número < 1 || número > 10);

console.log(`Você digitou o número ${número}. `);