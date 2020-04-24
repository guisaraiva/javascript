const pessoa = { nome: 'Guilherme'}
console.log(pessoa)
pessoa.nome = 'Joaquim'

Object.freeze(pessoa)

pessoa.nome = 'Maria João'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Bené'
console.log(pessoaConstante)