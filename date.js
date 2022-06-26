
//Validation par date
function ValidateDOB() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("txtDate").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        lblError.innerHTML = "Eligibility 18 years ONLY."
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "Vous avez l'age requis , profiter du site ";
        alert("Vous avez l'age requis !")
        return true;
    } else {
        lblError.innerHTML = "Entrer votre date de naissance dans un format dd/MM/yyyy"
        alert("Erreur le format n'est pas respecté.")
        return false;
    }
}
/*
var my_modal = document.getElementById('my_modal');


function showModal(){
  my_modal.style.display = "block";
}
// Ouverture après 1s le chargement de la page
setTimeout(showModal,100) // 1000ms

*/
//Fonction Check age


/*function check(){
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
*/
/*  
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
}*/