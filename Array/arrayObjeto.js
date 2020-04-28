const quaseArray = {0:'Rafel', 1:'Ana', 2:'Guilherme'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString',{
    value: function(){ return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafale', 'Ana', 'Guilherme']
console.log(quaseArray.toString(), meuArray)