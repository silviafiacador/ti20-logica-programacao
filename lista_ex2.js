//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.
let qtd=50;
let valorduzia=1.0;
let valorunitario=1.3;
let o_fim_do_calculo_das_macas_vermelhas_e_verdes;

if (qtd>=12) {
    o_fim_do_calculo_das_macas_vermelhas_e_verdes=qtd*valorduzia;

}
else {
    o_fim_do_calculo_das_macas_vermelhas_e_verdes=qtd*valorunitario;
    
}
console.log('Total a pagar: '+o_fim_do_calculo_das_macas_vermelhas_e_verdes);


