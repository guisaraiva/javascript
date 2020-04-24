// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Guilherme', idade: 32}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.nome = 'Rafaela'
pessoa.corCabelo = 'preto'
delete pessoa.tag
console.log(pessoa)