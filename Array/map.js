// Map - transformar / mapear um array em outro transformado
// For com propósito

const nums =[1, 2, 3, 4, 5]

let result = nums.map(function(x){
    return x * 2
})

console.log(result)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`

result = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(result)