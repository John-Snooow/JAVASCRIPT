function contar() {
    var ini = document.getElementById('txti')// não esta em forma de numero por isso criei outras var em baixo para converter para numeros estas 3 caixas
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] faltam dados')
    }else{
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo Invalido!')
            p = 1
        }

        if( i < f){
            // contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML +=` ${c} 👉`// este é o codigo para js: \u{1F449}
            }
        }else{
            // contagem regreciva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} 👉`
            }
        }
        res.innerHTML += `🏳️` 
    }
}
