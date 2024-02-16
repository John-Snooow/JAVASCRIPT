function verificar(){
    var data = new Date()
    var ano = data.getFullYear()// o getFullyear é para pegar o ano com quatro digitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){// vai dar erro se alguem digitar um valor igual a zero ou maior que o ano atual
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')// aqui eu coloquei o getElementsByName porque tem dois radsex no HTML 
       var idade = ano - fano.value
       //res.innerHTML = `Idade atual é <strong>${idade}</strong>` // aqui é para calcular su a idade atual
       var genero = ''
       var img = document.createElement ('img')// aqui eu vou atribuir as fotos de forma diferente da do HTML
        img.setAttribute('id', 'foto')// aqui o programa vai carregar a foto de acordo com as informaçoes
       if (fsex[0].checked){
        genero = 'Homen'
        if (idade < 10 ){
            //criança
            img.setAttribute('src', 'foto-bebe-h.png')
        }else if(idade < 21){
            //Jovem
            img.setAttribute('src', 'foto-jovem-h.png')
        }else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'foto-adulto-h.png')
        }else{
            //Idoso
            img.setAttribute('src', 'foto-idoso-h.png')
        }
       } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade < 10 ){
            //criança
            img.setAttribute('src','foto-bebe-m.png')
        }else if(idade < 21){
            //Jovem
            img.setAttribute('src','foto-jovem-m.png')
        }else if (idade < 50){
            //Adulto
            img.setAttribute('src','foto-adulto-m.png')
        }else{
            //Idoso
            img.setAttribute('src','foto-idoso-m.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)// para aparecer a imagem quando for digitado o ano
    }
}