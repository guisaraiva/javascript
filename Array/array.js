console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana Paula')
console.log(aprovados)

aprovados = ['Carlos', 'Maria', 'João']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Mariana')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] //exclui mas não reordena o array

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,0, 'Elemento1', 'Elemento2') //
console.log(aprovados)



