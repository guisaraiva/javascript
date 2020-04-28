const pilotos = ['Vetel', 'Alonso', 'Massa', 'Shumacker']
pilotos.pop() // O último elemento sai do array
console.log(pilotos)

pilotos.push('Guilherme')
console.log(pilotos)

pilotos.shift() // remove o primeiro item da lista
console.log(pilotos)

pilotos.unshift('Saraiva')
console.log(pilotos)

//Splice pode tanto adicionar como remover elementos de um array

pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

// remover elemento a partir do splice

pilotos.splice(3,1) // Remove um a partir de um elemento (neste exemplo, 3)
console.log(pilotos)

//novo array gerado

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // O indice 4 não entra
console.log(algunsPilotos2)
