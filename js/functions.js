
const game = function (playerInput) {

	const clearMessages = function () {
		document.getElementById('messages').innerHTML = '';
	};

	clearMessages();

	const message = function (msg) {
		const div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	const randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	const getMoveName = function (argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2)
			return 'papier';
		else if (argMoveId == 3)
			return 'nożyce';

		message('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}

	const computerMove = getMoveName(randomNumber);

	console.log('Wpisałeś: ' + playerInput);

	const playerMove = getMoveName(playerInput);


	message('Twój ruch, to: ' + playerMove);

	const displayResult = function (argComputerMove, argPlayerMove) {

		if (computerMove == 'kamień' && playerMove == 'papier') {
			message('Wygrywasz, a komputer przegrywa!');
		} else if (computerMove == 'papier' && playerMove == 'nożyce')
			message('Wygrywasz, hurra!');
		else if (computerMove == 'nożyce' && playerMove == 'kamień') {
			message('Wygrywaaasz');
		} else if (computerMove == playerMove) {
			message('Remis!');
		} else if (playerInput != '1' && playerInput != '2' && playerInput != '3')
			message('Nieznany ruch gracza!');
		else {
			message('Komputer wygrał!')
		}
	}

	displayResult(computerMove, playerMove);


}


function rock() {
	game(1);
}

const playRock = document.getElementById('play-rock');

playRock.addEventListener('click', rock);


function paper() {
	game(2);
}

const playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', paper);

function scissors() {
	game(3);
}

const playScissors = document.getElementById('play-scissors');

playScissors.addEventListener('click', scissors);


