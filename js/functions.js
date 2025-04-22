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

printMessage('Twój ruch to: ' + computerMove);

