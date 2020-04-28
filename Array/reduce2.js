const alunos =[
    {nome:'Guilherme', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Joaquina', nota: 9.8, bolsista: false},
    {nome: 'Ana Karla', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?

const arrayBolsista = alunos.map(aluno => aluno.bolsista)
let percorreArray = 0
while ( percorreArray < arrayBolsista.length) {
        if(arrayBolsista[percorreArray] == false)       {
            console.log('Todos os alunos não são bolsistas!')
        }
        percorreArray++
    }

// Desafio 2: Algum aluno é bolsista?

const arrayNome = alunos.map(e => e.nome)
const arrayEBolsista = alunos.map(aluno => aluno.bolsista)
let percorreArray2 = 0
while ( percorreArray2 < arrayEBolsista.length) {
        if(arrayEBolsista[percorreArray2] == false)       {
            
        } else{
            console.log(`O aluno ${arrayNome[percorreArray2]} é bolsista`)
        }
        percorreArray2++
    }
