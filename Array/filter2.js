// Usado para filtrar um array
Array.prototype.filterGuizao = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4599, fragil: true},
    {nome: 'Desktop', preco: 3500, fragil: false},
    {nome: 'Copo de vidro', preco: 1.99, fragil: false},
    {nome: 'Copo de plástico', preco: 2.99, fragil: false}
]


const produtoCaro = produto => produto.preco >= 500
const eFragil = produto => produto.fragil //retorna booleano

console.log(produtos.filterGuizao(produtoCaro).filterGuizao(eFragil))
