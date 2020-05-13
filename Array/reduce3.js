Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial || this[0]
    let acumulador = valorInicial || this[0]
    for (let i = 0; i < this.length;i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const num = [1, 2, 3, 4, 5, 6]
console.log(num.reduce2(soma, 21))