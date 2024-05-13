const direcoes = ["direita", "esquerda"];

console.log(direcoes.length);

const ingredientes = ["arroz", "massa", "batata"];

console.log(ingredientes.toString());

const numeros = [1, 2, 3];

const primeiroNumero = numeros.shift();
const ultimoNumero = numeros.pop();

console.log(numeros);

const nomes = ["joão", "rita"];
nomes.push("sofia");

console.log(nomes);

const cores = ["azul", "amarelo"];

console.log(cores.join("/"));

const veiculos = ["carro"];

console.log(veiculos.concat(cores));

const user = {
    Nome: "João",
    Idade: 29,
    Naturalidade: "Vila Nova de gaia",
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(Object.entries(user)[2]);
