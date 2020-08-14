// Intera com base nos valores

for (let letra of ('Cod3r')){
    console.log(letra);
};

const assuntosEcma = ['Map', 'Set', 'Promisse'];


for (let i in assuntosEcma ){
    console.log(i); //indice
};

for (let assunto of assuntosEcma ){
    console.log(assunto); //valor
};

const assuntosMap = new Map ([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
]);

for (let assunto of assuntosMap) {
    console.log(assunto);
};

for (let chave of assuntosMap.keys()){
    console.log(chave);
};

for (let valor of assuntosMap.values()){
    console.log(valor);
};

for (let [vlr, ch] of assuntosMap.entries()){
    console.log(vlr, ch);
};

