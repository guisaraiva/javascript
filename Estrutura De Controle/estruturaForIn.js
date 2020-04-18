const notas = [6.7, 8.5, 5.6, 1.68, 5.77, 9.85]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Saraiva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

