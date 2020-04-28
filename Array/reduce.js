// O reduce atua com um acumulador e um valor atual. 
// Realizando a iteração e acumulando o respectivo resultado

//objeto alunos

const alunos =[
    {nome:'Guilherme', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Joaquina', nota: 9.8, bolsista: false},
    {nome: 'Ana Karla', nota: 8.7, bolsista: true}
]

console.log(alunos.map(aluno => aluno.nota))

const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)