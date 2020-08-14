// Operador ... rest(juntar) / spread(spalhar)

//usar spread com objeto
const funcionario = { nome: "Guilherme", salario: 12348.99 };
const clone = { ativo: true, ...funcionario };

console.log(clone);

// usar spread com array
const grupoA = ['João', 'Maria', 'Marcela'];
const grupoFinal = ['Guilherme', ...grupoA, 'Tatianne'];

console.log(grupoFinal);

