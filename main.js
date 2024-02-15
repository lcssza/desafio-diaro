alert('Hello world')

let numberOne = 1
let numberTwo = 10

let resultado = numberOne + numberTwo

console.log(resultado)

console.log(typeof resultado)

if(isNaN(resultado)) {
console.log('Não é um número')
}else{
    console.log('É um número')
}


let lucas = 'O brabo da bola'
console.log(typeof lucas)

if( typeof lucas === 'string' ) {
    console.log('É uma string')
}else{
    console.log('Não é uma string')
} 


let isLoading = false

if(isLoading) {
    return "Esta carregando"
}else{
    return "Não está carregando"
}


let idadeLucas = 26
let idadeJessica = 23

let subtracao = idadeLucas - idadeJessica
console.log(subtracao)
let multiplicação = idadeLucas * idadeJessica
console.log(multiplicação)
let divisão = idadeLucas / idadeJessica
console.log(divisão)
let restoDivisão = idadeLucas / idadeJessica



if(subtracao%2 == 0){
	console.log("Par");
}else{
	console.log("Impar");
}









/*1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".*/