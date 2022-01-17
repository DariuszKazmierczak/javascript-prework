
function playGame(playerInput) {

    clearMessages();

    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if (argMoveId == 2){
            return 'papier';
        } else if (argMoveId == 3){
            return 'nozyce';
        }
    };

// ruch komputera - losowanie
    let randomNumber = Math.floor( Math.random() * 3 + 1);

    let argComputerMove = getMoveName(randomNumber);

// ruch gracza - wybór wartości od 1 do 3

    let argPlayerMove = getMoveName(playerInput);

// logika wyświetlania wyniku
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if(argComputerMove == 'kamien' && argPlayerMove == 'kamien'){
            printMessage('Mamy zatem remis');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Gracz wygrywa');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
            printMessage('Komputer wygrywa');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Komputer wygrywa');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Mamy zatem remis');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
            printMessage('Gracz wygrywa');
        } else if( argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
            printMessage('Gracz wygrywa');
        } else if( argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
            printMessage('Komputer wygrywa');
        } else if( argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
            printMessage('Mamy zatem remis');
        }  else {
            printMessage('Nieznany wynik');
        };
    }

    displayResult(argComputerMove, argPlayerMove);

};

document.getElementById('graj-kamien').addEventListener('click', function() {
    playGame('1')
});

document.getElementById('graj-papier').addEventListener('click', function() {
    playGame('2')
});

document.getElementById('graj-nozyce').addEventListener('click', function() {
    playGame('3')
});