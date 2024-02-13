//HORAS EM TEMPO RAEL EM ESTRUTURA CONDICIONAIS ANINHADAS
var agora = new Date() // esta variavel para nova data, é sempre date para verificar o agora
var hora = agora.getHours() // esta vai ligar com a var de cima para puxar a hora em tempo real, aqui sim eu vou colocar as horas, OBS nunca esqueça dos parenteses 
console.log(`Agora são ${hora} Horas`)
if( hora < 6){
     console.log('Boa madrugada')
}else if(hora <= 12){
    console.log('Bom dia!')
}else if(hora <=18){
    console.log('Boa tarde!')
}else if(hora <=24){
    console.log('Boa noite!')
}