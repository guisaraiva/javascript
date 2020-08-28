/* setTimeout(function () {
    console.log("Guilherme...1")

    setTimeout(function () {
        console.log("Guilherme...2")

        setTimeout(function () {
            console.log("Guilherme...3")
        }, 2000);
    }, 2000);
}, 2000); */

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Executando promisse...")
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)