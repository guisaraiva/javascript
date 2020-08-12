// Novos recursos relacionados a objetos

// ES8: Object.values / Object.entries

const objeto = {a: 1, b: 2, c: 3};

console.log(Object.values(objeto));
console.log(Object.entries(objeto));

// Melhorias na Notação Literal

const nome = "Guilherme";
const pessoa = {
    nome,
    ola() {
        return 'Oi Gente !!';
    }
}
console.log(pessoa.nome, pessoa.ola());

// Class

class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au Au !!'
    }
}

console.log(new Cachorro().falar());