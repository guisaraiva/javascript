Array.prototype.guilherme = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const qualidades = ['Bonitão', 'Cabeçudo', 'Careca']

qualidades.guilherme(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})