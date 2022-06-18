$(document).ready(function(){

$("#barras").click(function(){
    $("#menu").toggleClas ("menu-ativo")



//if($("#menu").hasClass ("menu-ativo")){
//    $("#menu").removeClass ("menu-ativo")
//}

//else{
//    $("#menu").addClass ("menu-ativo")
//}


})

})






let menu = document.getElementById ("menu");

 // function mostrarMenu (){
//   if (menu.style.display != "flex"){
//          menu.style.display = "flex"
//      }
//      else{
//          menu.style.display = "none"
//      }
//  }

 function mostrarPopup () {
    window.alert ("Parabens!")
 }

 var email = document.getElementById ("campo-email")

function enviarEmail(){
    let emaillDigitado = email.valeu;
    console.log(emaillDigitado)
}

let listaNoticias = [
{
    titulo:"Amazon ahajajdbjabjdabjdbaj ",
    descricao: "ajsbjgagjhasahvaa"
},
{
    titulo:"dolar foda",
descricao: ""},
{
    titulo:"",
    descricao: ""
},
{
    titulo:"",
    descricao: ""
},
{
    titulo:"",
    descricao: ""
},
{
    titulo:""
    descricao: ""
}

]