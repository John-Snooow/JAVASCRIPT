let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // vetor vasio usado para analizar os dados

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicirona(){
    if(isNumero(num.value) && !inLista(num.value, valores)){// só vai adicionar numeros e só se não estiver ne lista, se eu ja estiver adiciona do ele não vai aceitar o numero duas vezes
        valores.push(Number(num.value))// para adicionar a lista mais não mostra na tela ainda, para isso temos outra confg
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.` // para adicionar na caixa
        lista.appendChild(item)
        res.innerHTML = ''// para esvaziar o resultado na tela apos for finalizado, depois disso ele vai continuar somando os resultados
    }else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value =''// para altomatizar e toda vez que eu clicar em adircionar o numero eu não presisar a pagar o numero da caixinha pára digitar outro
    num.focus()//para o cursor do mause voltar para a cixinha pra digitar outro numero
}
function finalizar(){
    if(valores.length == 0){// se vetor estiver vazio
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length // o total de valores de elementos
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos] // para fazer a soma dos valores
            if(valores [pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor =  valores[pos]
        }
        media = soma / tot // para fazer o calculo da media
        res.innerHTML = ''// para ele zerar o valor
        res.innerHTML += `<p>Ao todo, temos ${tot} Números cadastrados.</p>`
        res.innerHTML += `<p>O Menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>O Maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`
    }
}