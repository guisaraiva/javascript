// Array Function

const soma = (a , b) => a + b;
console.log(soma(2,3));

const soma1 = (x , y) => {
   return x + y
}
console.log(soma1(2,4));

// Arrow function (this) - This associado ao escopo da função escrita.

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parametro default

function log(text = 'Node Js') {
    console.log(text);
};

log();
log("Recebendo um parâmetro");

// operador rest

function total (...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}
console.log(total(2, 4, 6, 5, 9));

