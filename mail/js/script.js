//creo l' array con dentro varie email
const autorizzati = ["rivaldogjoni@email.com", "pippobaudo@email.com", "fattigliaffarituoi@gmail.com", "michiamiilpresidente@gmail.com", "maeleiilpresidente@gamail.com", "scalainforza@gmail.com", "nimortaccitua@gmail.com"];

//creo un button, lo recupero dal dom ed aggiungo un evento al click
const button = document.getElementById("access")

button.addEventListener('click', function () {

    // creo un input dove chiedo all'utente la sua email ed recupero il valore inserito
    let email = document.getElementById('email').value.toLowerCase()

    //crea una variabile di controllo per dirmi se l'email è presente o meno nell array
    let controllo = false;

    //ciclo l'array e confronto l'elemento che sto ciclando con la parola inserita dall'input
    for (let i = 0; i < autorizzati.length; i++) {
        //se è vera la condizione : Accesso Consentito! imposto la variabile di controllo a true
        if (autorizzati[i].toLowerCase()) === email) {

}
    })
