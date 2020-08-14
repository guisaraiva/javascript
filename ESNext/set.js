// não aceita repetição e não é indexado


const times = new Set();

times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Cruzeiro');
times.add('Flamengo');
times.add('Vasco');


console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));

const nomes = ['Raquel', 'Guilherme', 'Raquel', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);

