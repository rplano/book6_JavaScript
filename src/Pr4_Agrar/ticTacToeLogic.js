
class TicTacToeLogic {

	constructor() {
		this.board = [[0,0,0],[0,0,0],[0,0,0]];
		//this.board = this.createArray(3, 3, 0);
	}

	createArray(w, h, val) {
		let arr = [];
		for (let i = 0; i < h; i++) {
			arr[i] = [];
			for (let j = 0; j < w; j++) {
				arr[i][j] = val;
			}
		}
		return arr;
	}

	isMoveAllowed(player, i, j) {
		if (this.board[i][j] == 0) {
			this.board[i][j] = player;
			return true;
		}
		return false;
	}

	isGameOver() {
		if (this.checkDiagonals())
			return true;
		if (this.checkHorizontals())
			return true;
		if (this.checkVerticals())
			return true;
		return false;
	}

	checkVerticals() {
		for (let i = 0; i < 3; i++) {
			if ((this.board[i][0] == 1) && (this.board[i][1] == 1) && (this.board[i][2] == 1)) {
				return true;
			}
		}
		for (let i = 0; i < 3; i++) {
			if ((this.board[i][0] == 2) && (this.board[i][1] == 2) && (this.board[i][2] == 2)) {
				return true;
			}
		}
		return false;
	}

	checkHorizontals() {
		for (let i = 0; i < 3; i++) {
			if ((this.board[0][i] == 1) && (this.board[1][i] == 1) && (this.board[2][i] == 1)) {
				return true;
			}
		}
		for (let i = 0; i < 3; i++) {
			if ((this.board[0][i] == 2) && (this.board[1][i] == 2) && (this.board[2][i] == 2)) {
				return true;
			}
		}
		return false;
	}

	checkDiagonals() {
		if ((this.board[0][0] == 1) && (this.board[1][1] == 1) && (this.board[2][2] == 1)) {
			return true;
		}
		if ((this.board[0][0] == 2) && (this.board[1][1] == 2) && (this.board[2][2] == 2)) {
			return true;
		}
		if ((this.board[2][0] == 1) && (this.board[1][1] == 1) && (this.board[0][2] == 1)) {
			return true;
		}
		if ((this.board[2][0] == 2) && (this.board[1][1] == 2) && (this.board[0][2] == 2)) {
			return true;
		}
		return false;
	}
}