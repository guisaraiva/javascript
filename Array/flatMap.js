const escola = [{
    nome: 'Turma M1',
    alunos: [
        {nome: 'Dorotéia', nota: 9.5},
        {nome: 'Aninha', nota: 14.5},]
},
    {   nome: 'Turma M1',
       alunos: [
        {nome: 'Guilherme', nota: 7.8},
        {nome: 'Mariana', nota: 8.0}
       ]
    }

]

const getNotaAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotaDaTurma)
console.log(nota2)