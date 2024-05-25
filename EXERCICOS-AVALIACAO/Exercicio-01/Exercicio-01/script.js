const paises = [
    "Albânia",
    "Bolívia",
    "Canadá",
    "Dinamarca",
    "Etiópia",
    "Finlândia",
    "Alemanha",
    "Hungria",
    "Irlanda",
    "Japão",
    "Quênia",
];

for (i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}
function numero(paises) {
    console.log(paises.length);
}
numero(paises);

paises.unshift("Portugal");
paises.push("Espanha");

console.log(paises);

function ultimosPaises(paises) {
    console.log(paises.slice(10, 13));
}

ultimosPaises(paises);

console.log(paises.join(" - "));
