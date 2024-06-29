// creiamo un button
const button = document.getElementById('tira');

//creo un generatore di numeri random da 1 a 6 compreso per giocatore ed computer
button.addEventListener('click', function () {

    //generatore random user
    let user = Math.round(Math.random() * 5) + 1;
    console.log(user)
    const userDice = 'img/dice' + user + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', userDice);

    //generatore random computer
    let computer = Math.round(Math.random() * 5) + 1;
    console.log(computer)
    const computerDice = 'img/dice' + computer + '.png';
    document.querySelectorAll('img')[1].setAttribute('src', computerDice);

    //all evento click del button questi numeri saranno confrontati:
    let risultato;

    //se il numero del giocatore ha valore > di numero del computer stampa hai vincitore
    if (user > computer) {
        risultato = "Hai vinto!"
    }

    //altrimenti se minore stampa hai perso
    else if (user < computer) {
        risultato = "Hai perso!"
    }
    //altrimenti pareggio
    else {
        risultato = "Un pareggio!"
    }
    console.log(risultato)

    document.getElementById('result').innerHTML = risultato;

    if (risultato == 'Hai vinto!') {
        document.getElementById('result').style.backgroundColor = 'green';
    }
    else if (risultato == 'Hai perso!') {
        document.getElementById('result').style.backgroundColor = 'red';
    }

    else {
        document.getElementById('result').style.backgroundColor = 'grey';
    }
})