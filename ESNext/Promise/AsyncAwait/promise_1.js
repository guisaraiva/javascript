
function primeiroElemento(array){
    return array[1];
}

function primeiraLetra(string){
    return string[0];
}

const letraMinuscula = letra => letra.toLowerCase();

// Um .then vai usando o resultado do .then anterior
let p = new Promise(function (cumprirPromessa){
    cumprirPromessa([
        'Guilherme',
        'Tatianne',
        'Rizzoli',
        'Arya'
    ]);
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log);