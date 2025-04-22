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

let computerMove = `nieznany ruch`;

if (randomNumber == 1) {
	computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else {
	computerMove = 'nożyce'
};

printMessage('Ruch komputera, to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Wpisałeś: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
	playerMove = 'kamień';
} else if (playerInput == '2') {
	playerMove = 'papier';
} else {
	playerMove = 'nożyce'; 23
}

printMessage('Twój ruch, to: ' + playerMove);


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