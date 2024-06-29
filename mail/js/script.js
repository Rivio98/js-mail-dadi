//creo l' array con dentro varie email
const autorizzati = ["rivaldogjoni1998@gmail.com", "pippobaudo@gmail.com", "fattigliaffarituoi@gmail.com", "michiamiilpresidente@gmail.com", "maeleiilpresidente@gamail.com", "scalainforza@gmail.com", "nimortaccitua@gmail.com"];

//creo un button, lo recupero dal dom ed aggiungo un evento al click
const button = document.getElementById("access");

button.addEventListener('click', function () {

    // creo un input dove chiedo all'utente la sua email ed recupero il valore inserito
    let email = document.getElementById('email').value.toLowerCase();

    //crea una variabile di controllo per dirmi se l'email è presente o meno nell array
    let controllo = false;

    document.getElementById('mostra_email').innerHTML = email;

    //ciclo l'array e confronto l'elemento che sto ciclando con la parola inserita dall'input
    for (let i = 0; i < autorizzati.length; i++) {
        //se è vera la condizione imposto la variabile di controllo a true
        if (autorizzati[i].toLowerCase() === email) {
            controllo = true;
        }
    }
    // se la variabile è true il messaggio sarà : Accesso consentito!
    if (controllo === true) {
        console.log(`${email.toLowerCase()} Accesso consentito!`);
        document.getElementById('tipo-autorizzazione').innerHTML = 'Accesso consentito!';
    }
    else { //altrimenti : Accesso negato!
        console.log(`${email.toLowerCase()} Accesso negato!`);
        document.getElementById('tipo-autorizzazione').innerHTML = 'Accesso negato!';
    }

})

