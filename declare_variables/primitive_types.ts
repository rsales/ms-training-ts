/* 
Tipos boolianos:
O tipo de dados mais básico é o valor true ou false, conhecido como booliano.
*/

let flag: boolean;
let yes = true;
let no = false;

/* 
Tipos númericos e BigInteger:
Como no JavaScript, todos os números no TypeScript são valores de ponto flutuante ou BigIntegers. Esses números de ponto flutuante obtêm o tipo number, enquanto BigIntegers obtém o tipo bigint. Além de literais hexadecimais e decimais, o TypeScript também é compatível com literais binários e octais introduzidos no ECMAScript 2015.
*/

let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

/* 
Tipos cadeia de caracteres:
A palavra-chave string representa sequências de caracteres armazenados como unidades de código UTF-16 Unicode. Como o JavaScript, o TypeScript também usa aspas duplas (") ou aspas simples (') para circundar dados de cadeia de caracteres.
*/

let s: string;
let empty = "";
let abc = 'abc';

/* 
No TypeScript, você também pode usar cadeias de caracteres de modelo, que podem abranger várias linhas e ter expressões inseridas. Essas cadeias de caracteres são circundadas pelo caractere de acento grave/aspas simples (`) e as expressões inseridas são no formato ${ expr }.
*/

let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
                        I am new to Typescript.`
console.log(sentence);

/* 
Tipos void, null e undefined:
O JavaScript e o TypeScript têm dois valores primitivos usados para sinalizar valor ausente ou não inicializado: null e undefined. Esses tipos são mais úteis no contexto das funções, portanto, vamos discuti-los mais detalhadamente em um módulo posterior.
*/