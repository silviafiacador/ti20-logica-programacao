let nome = 'Giovanni';

let quantidade_adquirida = 6;

let preço_de_cada_unidade = 1;

let desconto_5_unidades= 0.02;

let desconto_6_10_unidades = 0.03;

let desconto_11_para_cima = 0.05;



if (quantidade_adquirida<=5){

    total = (quantidade_adquirida * preço_de_cada_unidade) / desconto_5_unidades;

    console.log(nome + " " +"precisa pagar: " + total)

}



if (quantidade_adquirida>6 && quantidade_adquirida<=10){

    total = (quantidade_adquirida * preço_de_cada_unidade) / desconto_6_10_unidades;

    console.log( nome + " " +" precisa pagar: " + total)

}



if (quantidade_adquirida>11){

    total = (quantidade_adquirida * preço_de_cada_unidade) / desconto_11_para_cima;

    console.log( nome + " " +"precisa pagar: " + total)

}