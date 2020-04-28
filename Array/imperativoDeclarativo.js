// Objeto
const alunos =[
    {nome: 'Guilherme', nota: 7.9},
    {nome: 'Rafaela', nota: 9.2}
]

// Escrita Imperativa
let total1 = 0
for (let i=0; i <alunos.length; i ++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Escrita Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// Deixar a própria linguagem resolver os problemas do software
// Programação funcional
