function tratarErroELancar(erro) {
    throw new Error('Mensagem de erro')
    
}

function imprimirNomeGritado()  {
    try{
    console.log(obj.name.toUpperCase() + '!!!') //name em inglês e passou o nome português na chamada.
    }
    catch (e)
    {
        tratarErroELancar(e)
    }
    finally{
        console.log('Final da execução !!')
    }
}

const obj = {nome: "Guilherme"}
imprimirNomeGritado(obj)

/**
 * Tratar com o try quando identificar bloco que poderão gerar erro de execução.
 */