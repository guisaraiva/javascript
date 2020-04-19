// Closure é o escopo criado quando uma função é declarada.
// Esse escopo permite a função acessar e manipular variáveis externas à função.

// Contexto léxico em ação !

const x = 'Global' // Não é o conceito Global do node.

function fora () {
    const x = 'Local'
    function dentroFora (){
        return x
    }
    return dentroFora
}

const minhaFuncao = fora()
console.log(minhaFuncao())