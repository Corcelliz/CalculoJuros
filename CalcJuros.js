import CalcJuros from 'readline-sync';

console.log("Aplicação de Juros: ");

let valor_juros = 10;

let Valor_Devido = CalcJuros.question("\nDigite o valor da dívida: ");
let Dias_Atrasados = CalcJuros.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

Valor_Devido = Number(Valor_Devido);
Dias_Atrasados = Number(Dias_Atrasados);

let Total_juros = (Valor_Devido / 100) * valor_juros;
let Total_divida = Valor_Devido + Total_juros;

console.log("\nValor original da divida: "+ "R$"+ Valor_Devido);
console.log("Dias atrasados: "+ Dias_Atrasados);
console.log("Taxa de Juros: "+ valor_juros+ "%");
console.log("Valor total com juros: "+ "R$" +Total_divida);

