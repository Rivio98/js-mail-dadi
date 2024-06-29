// creiamo un button
const button = document.getElementById('tira');

//creo un generatore di numeri random da 1 a 6 compreso per giocatore ed computer
button.addEventListener('click', function () {

    //generatore random user
    let user = Math.round(Math.random() * 5) + 1;
    console.log(user)

    //generatore random computer
    let computer = Math.round(Math.random() * 5) + 1;
    console.log(computer)

    //all evento click del button questi numeri saranno confrontati:
    let risultato;

    if (user > computer) {
        risultato = "Hai vinto"
    }
    else if (user < computer) {
        risultato = "Hai perso"
    }
    else {
        risultato = "Pareggio"
    }
    console.log(risultato)
})