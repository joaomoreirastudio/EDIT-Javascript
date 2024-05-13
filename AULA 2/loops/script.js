console.log("for");
let i = 0;
for (i = 0; i <= 10; i = i + 2) {
    console.log(i);
}

console.log("while com modulo");
let k = 0;
while (k <= 10) {
    if (k != 0 && k % 2 === 0) {
        console.log(k);
    }
    k++;
}

console.log("do while");
let a = 0;
do {
    console.log(a);
    a = a + 2;
} while (a <= 10);

console.log("for com modulo");

for (let b = 0; b <= 10; b++) {
    if (b % 2 === 0) {
        console.log(b);
    }
}
