/* 
Tipo enumerado:
Uma adição útil ao conjunto padrão de tipos de dados do JavaScript é o tipo de enumeração ou enum.

As enumerações oferecem um jeito fácil de trabalhar com conjuntos de constantes relacionadas. Um enum é um nome simbólico para um conjunto de valores. As enumerações são tratadas como tipos de dados e você pode usá-las para criar conjuntos de constantes para uso com variáveis e propriedades.

Sempre que um procedimento aceita um conjunto limitado de variáveis, considere o uso de uma enumeração. As enumerações tornam o código mais claro e mais legível, especialmente quando são usados nomes significativos.

O uso de enumerações:

Ajuda a reduzir erros causados pela transposição ou digitação incorreta de números.
Torna mais fácil alterar valores no futuro.
Torna o código mais fácil de ler, o que significa que é menos provável que os erros possam surgir nele.
Garante a compatibilidade com o futuro. Com as enumerações, o código será menos propenso a falhar se, posteriormente, alguém alterar os valores correspondentes aos nomes dos membros.
*/

enum ContractStatus {
  Permanent,
  Temp,
  Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

/* 
Por padrão, os valores enum começam com um valor de 0, portanto, Permanent é 0, Temp é 1 e Apprentice é 2. Se você quiser que eles comecem com um valor diferente, neste caso 1, especifique isso na declaração enum. Faça as edições a seguir para que o enum inicie os valores em 1.
*/

enum ContractStatusUpdate {
  Permanent = 1,
  Temp,
  Apprentice
}

let employeeStatusTwo: ContractStatusUpdate = ContractStatusUpdate.Temp;
console.log(employeeStatusTwo);
console.log(ContractStatusUpdate[employeeStatusTwo]);

