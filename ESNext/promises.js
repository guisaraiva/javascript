const { reject } = require("lodash");

// 
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase);
        }, segundos * 1000);
    });
}

falarDepoisDe(3, "Que legazinho a Promisso !!!")
    .then(frase => frase.concat(' Doido demais!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e));

