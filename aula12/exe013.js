// CONDIÇÕES MULTIPLAS PARA TESTAR DADOS PONTUAIS COMO DIAS DA SEMANA OU MES
// mais se quiser testar algo do tipo entre di 02 e 09 de um mes seria melhor o "if"
var agora = new Date()
var diaSem = agora.getDay()
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('Quartar')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:// neste caso não é nesseçario mais fiz para exeplificar o defaut
        console.log('[ERRO] Dia invalido')
        break    
}