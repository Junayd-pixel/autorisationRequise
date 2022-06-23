/*function showPopUp(){
	my_popup.style.display="block";
}

function hidePopUp(){
	my_popup.style.display="none";
}   

function showPopUp(){
	my_popup.style.display="block";
}
setTimeout(showPopUp,60000);*/



// Modal fonction
/*function checkAge() {
    var age = document.getElementById("age");
    var adult = document.getElementById("adult");
    var oldEnough = false;
    var result = document.getElementById("answer")
    if (parseInt(age.value, 10) >= 18) {
      oldEnough = true;
    } else {
      oldEnough = false;
    }
    if (oldEnough == false) {
        if (adult.value == "y") {
            result.innerHTML = "You are not old enough, but have an adult with you.";
      } else {
          result.innerHTML = "Vous n'êtes pas assez âgé et n'êtes pas accompagné.."
        }
    } else {
        result.innerHTML = "You are old enough."
    }
}
*/



var my_modal = document.getElementById('my_modal');


function showModal(){
  my_modal.style.display = "block";
}
// Ouverture après 1s le chargement de la page
setTimeout(showModal,100) // 1000ms


//Fonction Check age


function check(){
    var nbr;
    nbr = Number(document.getElementById("age").value);
    if(nbr < 18)
    {
       alert("Vous n'êtes pas un adulte");
       window.location.assign("https://www.google.fr/")
      }
    
     if(isNaN(nbr)){
      alert("Valeur incorrecte")
    }
    if(nbr >= 18)
    {
       alert("Vous êtes un adulte , consulter le site")
    }
  }

  
// Fermeture 
function closeModal(){
    var nbr;
    nbr = Number(document.getElementById("age").value);
    if(nbr >= 18)
    {
   my_modal.style.display = "none";
    }

    if(isNaN(nbr)){
      alert("valeur incorrecte")
    }
}



