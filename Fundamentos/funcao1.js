//Função sem retorno

function imprimirSoma (a, b)    {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //Se passar apenas um parâmetro, o outro será "undefined" por padrão.
imprimirSoma(2,10,4,56,5) //A função só irá pegar as posições 0 e 1. Irá ignorar o resto.

//Função com retorno

function soma(a, b = 0) { //O segundo parâmetro será 0 por default
    return a + b
}

console.log(soma(2, 5))
console.log(soma(2))