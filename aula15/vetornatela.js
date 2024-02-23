let valores = [6, 4, 1, 9, 7, 5]

console.log(valores)
/* 
Uma das formas de fazer o programa mas seria muito trabalhoso
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
Esta ja é mais simplificada mais tem uma melhor que eu vou deixar mais a baixo

for (let pos= 0; pos < valores.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
// FAZ A MESMA COIS QUE OS CODIGPS DE CIMA SÓ DE FOPRMA MAIS SIMPLIFICADA
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}