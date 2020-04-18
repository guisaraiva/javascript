//novo recurso no ES 2015

const pessoa = {
    nome: 'Guilherme',
    idade: 32,
    endereco: {
        logradouro: "Rua Blenda",
        numero: 109
    }
}

//Operador destructuring

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco:{ logradouro, numero}} = pessoa
console.log(logradouro, numero)
