function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2)
		return 'papier';
	else if (argMoveId == 3)
		return 'nożyce';

	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}

const computerMove = getMoveName(randomNumber);


const playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Wpisałeś: ' + playerInput);

const playerMove = getMoveName(playerInput);


printMessage('Twój ruch, to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove) {

	if (computerMove == 'kamień' && playerMove == 'papier') {
		printMessage('Wygrywasz, a komputer przegrywa!');
	} else if (computerMove == 'papier' && playerMove == 'nożyce')
		printMessage('Wygrywasz, hurra!');
	else if (computerMove == 'nożyce' && playerMove == 'kamień') {
		printMessage('Wygrywaaasz');
	} else if (computerMove == playerMove) {
		printMessage('Remis!');
	} else if (playerInput != '1' && playerInput != '2' && playerInput != '3')
		printMessage('Nieznany ruch gracza!');
	else {
		printMessage('Komputer wygrał!')
	}
}

2
2
displayResult(computerMove, playerMove);