
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
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3:nozyce.');

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



// ------------------------------------

// function getMoveName(argMoveId){
//     if(argMoveId == 1){
//       return 'kamień';
//     }

//     if(argMoveId == 2){
//         return 'papier';
//     }
  
//     if(argMoveId == 3){
//         return 'nozyce';
//     }
// }

// // losowanie zmiennej

// let randomNumber = Math.floor(Math.random() * 3 + 1);

// console.log('Wylosowana liczba to: ' + randomNumber);

// let computerMove = getMoveName(randomNumber);

// // if(randomNumber == 1){
// //   computerMove = 'kamień';
// // } else if (randomNumber == 2) {
// //     computerMove = 'papier';
// // } else if (randomNumber == 3) {
// //     computerMove = 'nozyce';
// // };

// printMessage('Mój ruch to: ' + computerMove);

// // wybór wartości playerInput

// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

// console.log('Gracz wpisał: ' + playerInput);

// let playerMove = getMoveName(randomNumber);

// // if(playerInput == '1'){
// //   playerMove = 'kamień';
// // } else if (playerInput == '2') {
// //     playerMove = 'papier';
// // } else if (playerInput == '3') {
// //     playerMove = 'nozyce';
// // }

// printMessage('Twój ruch to: ' + playerMove);

// // logika wyniku gry

// function displayResult(argComputerMove, argPlayerMove) {
//     if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
//         return 'komputer wygrywa';
//     }

//     if (argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
//         return 'wygrywasz';
//     }

//     if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
//         return 'Mamy remis, gramy dalej ?';
//     }

//     if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
//         return 'Mamy remis, gramy dalej ?';
//     }

//     if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
//         return 'komputer wygrywa';
//     }

//     if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
//         return 'wygrywasz';
//     }

//     if (argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
//         return 'wygrywasz';
//     }

//     if (argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
//         return 'Mamy remis, gramy dalej ?';
//     }

//     if (argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
//         return 'komputer wygrywa';
//     }
// }

// console.log(getMoveName('2'));


// // if (computerMove == 'kamień' && playerMove == 'papier') {
// //     printMessage('Ty wygrywasz');
// // } else if (computerMove == 'kamień' && playerMove == 'nozyce') {
// //     printMessage('komputer wygrywa');
// // } else if (computerMove == 'kamień' && playerMove == 'kamień') {
// //     printMessage('remis');
// // } else if (computerMove == 'nozyce' && playerMove == 'papier') {
// //     printMessage('komputer wygrywa');
// // } else if (computerMove == 'nozyce' && playerMove == 'kamień') {
// //     printMessage('Ty wygrywasz');
// // } else if (computerMove == 'nozyce' && playerMove == 'nozyce') {
// //     printMessage('remis');
// // } else if (computerMove == 'papier' && playerMove == 'papier') {
// //     printMessage('remis');
// // } else if (computerMove == 'papier' && playerMove == 'nozyce') {
// //     printMessage('Ty wygrywasz');
// // } else if (computerMove == 'papier' && playerMove == 'kamień') {
// //     printMessage('komuter wygrywa');
// // } else if (playerMove == 'nieznany ruch') {
// //     printMessage('podałeś niewłaściwą wartość bądź zapomniałes jej podać, więc dałeś komuterowi wygrać');
// // };

