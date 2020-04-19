// Factory simples
function criarPessoa () {
    return {
        nome: 'Guilherme',
        sobrenome: 'Saraiva'
    }
}
console.log(criarPessoa())

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto:  0.1
    }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Relógio', 199.49))
console.log(criarProduto('Geladeira', 2199.49))
console.log(criarProduto('Micro ondas', 299.49))
