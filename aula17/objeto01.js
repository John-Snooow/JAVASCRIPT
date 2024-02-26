/* Aqui está um exemplo de um objeto que diferente de um vetor ele tem várias funcionalidades e pode conter vários tipos de variáveis simultaneamente.*/
let amigo = {nome: 'John',
sexo: 'M',
peso: '98.2',
engordar (p=0){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(0.6)// aqui atribui o quanto eu engordei 
console.log(`${amigo.nome} pesa ${amigo.peso}`)