// Tipos básicos
let nome: string = 'Daniel'; // Qualquer tipo de string: '' "" ``
let idade: number = 33; // 10, 1.57, -5.55 0xf00d, 0b1010, 0o7744
let isValid: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol

// Arrays
const arrNumber: Array<number> = [ 1, 2, 3, 4 ];
console.log(arrNumber);
const arrStr: string[] = [ 'Daniel', 'Flávia', 'Matheus' ];
console.log(arrStr);

// Objetos
const pessoa: { nome: string; idade: number; estudando?: boolean } = {
	nome: 'Daniel',
	idade: 33,
	estudando: true
};
console.log(pessoa);

// Funções
function soma(x: number, y: number) {
	return x + y;
}
console.log(soma(10, 15));
