Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 2.45 }',
    '{"nome": "Caderno", "preco": 13.10 }',
    '{"nome": "Mochila", "preco": 23.99 }',
    '{"nome": "Caneta", "preco": 5.99 }',
    '{"nome": "Lápis", "preco": 2.71}'
]

// Retorna um array apenas com os precos

const transformaObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(transformaObjeto).map2(apenasPreco)
console.log(resultado)