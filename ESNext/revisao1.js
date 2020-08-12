// let e const
// let tem escopo de bloco.

{
    var a = 2;
    let b = 3;
    console.log(b);
}
console.log(a);

// Template String

const nome = "Guilherme Silva Saraiva";
console.log(`Meu nome é ${nome}`);

// Destructuring

const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x , y] = [1 , 2 , 3];
console.log(x, y);

const { idade1, nomeCompleto1 } = { nomeCompleto1: 'Guilherme', idade1: 32};
console.log(idade1, nomeCompleto1);


const { idade2, nomeCompleto2: nomeCurto } = { nomeCompleto2: 'Guilherme', idade2: 32};
console.log(idade2, nomeCurto);
