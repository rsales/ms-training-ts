/* 
Tipos any e unknown:
Há ocasiões em que você precisará trabalhar com valores que são desconhecidos no momento que desenvolve seu código. Nesses casos, você pode usar os tipos any e unknown e usar a declaração de tipo e as proteções de tipo para manter o controle sobre o que o código tem permissão para fazer com os valores que são passados.
*/

/* 
Tipos qualquer (any):
O tipo any é um tipo que pode representar qualquer valor de JavaScript sem restrições. Esse tipo pode ser útil quando você está esperando um valor de uma biblioteca de terceiros ou de entradas de usuário em que o valor é dinâmico porque o tipo any permitirá que você reatribua diferentes tipos de valores. E, como mencionado anteriormente, o uso do tipo any permite que você migre gradualmente seu código JavaScript para usar tipos estáticos no TypeScript.
*/

let randomValue: any = 10;
randomValue = 'Mateo';
randomValue = true;

/*
Como randomValue está registrado como any, todos os exemplos a seguir são TypeScript válidos e não geram um erro em tempo de compilação. No entanto, podem ocorrer erros de runtime dependendo do tipo de dados real da variável. Considerando o exemplo anterior em que randomValue está definido como um valor booliano, as seguintes linhas de código vão gerar problemas no runtime:
*/

console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error


/* 
Tipos unknown:
Embora seja flexível, o tipo any pode causar erros inesperados. Para resolver esse problema, o TypeScript introduziu o tipo unknown.

O tipo unknown é semelhante ao tipo any, pois qualquer valor pode ser atribuído ao tipo unknown. No entanto, você não pode acessar nenhuma propriedade de um tipo unknown, nem os chamar ou os construir.

Este exemplo altera o tipo any no exemplo anterior para unknown. Agora, ele gerará erros de verificação de tipo e impedirá a compilação do código até que você execute a ação apropriada para resolvê-los.
*/

let randomValueTwo: unknown  = 10;
randomValueTwo = true;
randomValueTwo = "Mateo";

console.log(randomValueTwo.name);  // Error: Object is of type unknown
randomValueTwo();                  // Error: Object is of type unknown
randomValueTwo.toUpperCase();      // Error: Object is of type unknown


/*
Asserção de tipo:

Se você precisar tratar uma variável como um tipo de dados diferente, poderá usar uma declaração de tipo. Uma declaração de tipo informa ao TypeScript que você executou as verificações especiais necessárias antes de chamar a instrução. Ele informa ao compilador "confie em mim, eu sei o que estou fazendo". Uma declaração de tipo é como uma cast de tipo em outras linguagens, mas não executa nenhuma verificação especial ou reestruturação de dados. Isso não tem efeito em runtime e é usado puramente pelo compilador.
*/

// As asserções de tipo têm duas formas. Uma é a as-sintaxe:
(randomValueTwo as string).toUpperCase();

// A outra versão é a sintaxe "colchete angular":
(<string>randomValueTwo).toUpperCase();


/*
O exemplo a seguir executa a verificação necessária para determinar que randomValue é um string antes de usar a declaração de tipo para chamar o método toUpperCase.
*/

let randomValueThree: unknown = 10;

randomValueThree = true;
randomValueThree = 'Mateo';

if (typeof randomValueThree === "string") {
  console.log((randomValueThree as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log("Error - A string was expected here."); //* Returns an error message.
}

/*
Protetores de tipo:

O exemplo anterior demonstra o uso de typeof no bloco if para examinar o tipo de uma expressão em runtime. Este teste condicional é chamado de proteção de tipo.

Você pode estar familiarizado com o uso do typeof e instanceof do JavaScript para testar essas condições. O TypeScript compreende essas condições e alterará a inferência de tipos de maneira adequada quando usada em um bloco if.

Você pode usar as seguintes condições para saber qual é o tipo de uma variável:
*/

// string
typeof s === "string";

// number
typeof n === "number";

// boolean
typeof b === "boolean";

// undefined
typeof undefined === "undefined";

// function
typeof f === "function";

// array
Array.isArray(a)