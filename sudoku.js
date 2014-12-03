function sudoku(grid) {
	this.grid = [];
	// For each column of squares
	for(var x = 0; x < 9; x++) {
		// For each row of squares
		for(var y = 0; y < 9; y++) {
			this.grid[x][y] = new sudokuCell(grid[x][y]); // Create new sudoku cell
		}
	}
}

sudoku.prototype.solve = function() {
	
	};



function sudokuCell(number) {
	this.number = number;
	if(this.number) {
		this.possibles = [1,2,3,4,5,6,7,8,9];
	} else {
		this.possibles = [this.number];
	}
}
