/*Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
*/
let numero_da_conta="2345-9";
let saldo=800.00;
let debito=5000.00;
let credito=1000.00;
let saldo_atual=saldo+credito-debito;
let situacao;

if (saldo_atual>=0){
   situacao =" saldo POSITIVO";
}
else
{
    situacao =" saldo NEGATIVO";
}

console.log("A conta: "+numero_da_conta+" tem saldo: "+saldo_atual+situacao);

