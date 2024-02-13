//IDADE PARA VOTAR EM ESTRUTURA CONDICIONAIS ANINHADAS
var idade = 77
console.log(`você tem ${idade} anos`)//OBS: só coloca acrase quando for uma variavel dentro do parentese em outros caso aspas simples
if (idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){//significa se não se, || = ou
    console.log('O voto é opicional')
}else{
    console.log('O voto é obrigatorio')
}
