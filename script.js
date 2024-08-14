funciton carregar(){ 
var msg = window.document.getElementById('msg')
  var img = aindow.document.get.ElementById('imagem')
  var data = New Date() //pega a hora da data atual
  var hora= data.getHours()//pega a hora da data atual
      msg.InnerHTML = `Agora são ${hora} horas.`
      if (hora >=0 && hora < 12){
        //Bom dia 
        img.scr = 'manha.jpeg'
      } else if(hora >=12 && hora <18){
             //Boa tarde
             img.scr = 'tarde.jpeg'
        } else {
             //Boa noite 
             img.scr = 'noite.jpeg'
      }
