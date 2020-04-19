// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1 () {}

// Armazenar em uma variável
// Neste caso, é uma função anônima
const fun2 = function () {}

// Armazenar em um array
const array = [function (a , b){ return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa !!'}
console.log(obj.falar())

// Passar função como parâmetro
function run (fun) {
    fun ()
}
run (function() {console.log("Executando.....")})

// Uma função pode retornar/conter uma outra função
function soma(a , b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(5)
const cincoMais = soma(2,3)
cincoMais(4)