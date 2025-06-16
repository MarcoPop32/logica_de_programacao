function dobrar(num){
    num = num*2
    return num
}

let valorString = prompt("Digite um valor e eu darei o dobro dele");
let valor = parseInt(valorString)

if (isNaN(valor)){
    console.log("Valor inválido!")
}else {
console.log(dobrar(valor));
console.log(valor);
}

