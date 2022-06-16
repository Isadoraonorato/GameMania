let menu = document.getElementById ("menu");

  function mostrarMenu (){
      if (menu.style.display != "flex"){
          menu.style.display = "flex"
      }
      else{
          menu.style.display = "none"
      }
  }

 function mostrarPopup () {
    window.alert ("Parabens!")
 }

 var email = document.getElementById ("campo-email")

function enviarEmail(){
    let emaillDigitado = email.valeu;
    console.log(emaillDigitado)
}