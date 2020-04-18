//Armazenando um função em uma variável
const imprimirSoma = function (a,b) {
    console.log(a + b)
}
imprimirSoma(2 , 3)


//Armazenando um função arrow em uma variável
const soma = (a , b) => {
    return a + b
}
console.log(soma(5,35))


//Retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2("Guilherme é Legal !!")