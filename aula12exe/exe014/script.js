function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() // data atual
    var hora = data.getHours()// para puchar as horas da data atual
    //var hora = 22 // para forçar a hora e Fazer testes
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#98a72d'// para colocar a cor de fundo referente a cada horario
    }else if( hora >=12 && hora <= 18){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#823709'
    }else{
        // Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#503c5f'
    }
}