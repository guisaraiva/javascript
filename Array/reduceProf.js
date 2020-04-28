const alunos =[
    {nome:'Guilherme', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Joaquina', nota: 9.8, bolsista: false},
    {nome: 'Ana Karla', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(elemento => elemento.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(elemento => elemento.bolsista).reduce(algumBolsista))