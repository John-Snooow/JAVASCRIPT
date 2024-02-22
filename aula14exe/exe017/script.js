function tabuada(){// aqui nesse exe eu vou usar o let no lugar do var mas é a mesma coisa
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    // pegando os numeros e convertendo
    if (num.value.length == 0){
        window.alert('Por favor, digite um munero!')// para aparecer esta mensagem caso não seja digitado nada
    } else {
        let n = Number(num.value)
        let c = 1 // contador que começa com 1
        tab.innerHTML = ''// para quando eu digitar outro numero e primeiro  que foi digitado apagar altomaticamente
        while(c <= 10){// enquanto o contador for menor igual a 10
            let item = document.createElement('option')// para criar um elemento que no caso é a tabuada
            item.text = `${n} x ${c} = ${n*c}` // para criar a parte de dentro da tabuada
            item.value = `tab${c}`// para o valor de tab para o js não faz tanto sentido mas para as outras linguagens sim
            tab.appendChild(item)// para aparecer na tela a tebuada
            c++
        }
    }
}