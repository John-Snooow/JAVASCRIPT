let num  = [5, 2, 6, 9, 3]
num.sort()// PARA COLOCAR EM ORDEM CRESCENTE
num.push(1) // para colocar o 1 em uma posição aleatoria e vai deixar de ter 5 posições para ter 6 porque atribuio este numero
console.log(num)
console.log(`O vetor tem ${num.length} posições`)// para mostrar quantas posições vai ter o programa
console.log(`O primeiro valor do vetor é ${num[0]}`)// aqui no resultado a baixo vai aparecer o 1 porque eu disse mais a cima para o programa colocar o 1 na frente o em liguagem de programação começamos a contar do 0

let pos = num.indexOf(9)// para identifivar a posição que esta o numero 9
if (pos == -1){
    console.log('O valor não foi encontrado!')// para caso eu digite algum numero que naõ esteja entre os numeros ele vai mandar esta mensagem
} else {
    console.log(`O valor esta na posição ${pos}`)
}