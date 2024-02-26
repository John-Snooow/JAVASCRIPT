let num = document.querySelector('input#fnum')
let flista = document.querySelector('select#flista')
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

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){// só vai adicionar numeros e só se não estiver ne lista, se eu ja estiver adiciona do ele não vai aceitar o numero duas vezes
        valores.push(Number(num.value))// para adicionar a lista mais não mostra na tela ainda, para isso temos outra confg
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.` // para adicionar na caixa
        lista.appendChild(item)
    }else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
}