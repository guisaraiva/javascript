// Usado para filtrar um array

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4599, fragil: true},
    {nome: 'Desktop', preco: 3500, fragil: false},
    {nome: 'Copo de vidro', preco: 1.99, fragil: false},
    {nome: 'Copo de plástico', preco: 2.99, fragil: false}
]

console.log(produtos.filter(function(produto){
    return false
}))

const produtoCaro = produto => produto.preco >= 500
const eFragil = produto => produto.fragil //retorna booleano

console.log(produtos.filter(produtoCaro).filter(eFragil))
