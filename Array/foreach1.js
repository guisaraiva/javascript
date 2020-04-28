const aprovados = ['Guilherme', 'Aldo', 'Daniel', 'Lucas']

aprovados.forEach(function(batata, indice){
    console.log(`${indice + 1}) ${batata}`)
})

// com arrow function

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
