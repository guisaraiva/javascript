function imprimirNota(nota) {
    if (nota >= 7) {
        console.log("Aprovado com " + nota)
    }
    else {
        console.log("Reprovado com "+ nota)
    }
}
imprimirNota(5)
imprimirNota(10)
