function SnakeModel(){
	this.snakeBody = []
	this.snakeBody.push(new SnakeGrowth(1, 0))
	this.snakeBody.push(new SnakeGrowth(0, 1))
}

SnakeModel.prototype = {
	snakeBodyLength: function(){
		return this.snakeBody.length
	},
	allSnakeBodyPositions: function(){
		arrayOfPositions = []
		for(var x=0; x<this.snakeBodyLength(); x++){
			arrayOfPositions.push(this.snakeBody[x].boardPos)
		}
		return arrayOfPositions
	},
	moveSnake: function(){
		for(var x=0; x<=(this.snakeBodyLength()-2); x++){
			this.snakeBody[x].boardPos = this.snakeBody[x+1].boardPos
		}
		this.snakeBody[this.snakeBodyLength()-1].boardPos = this.snakeBody[this.snakeBodyLength()-1].boardPos+1
	}
}


function SnakeGrowth(boardPos, snakePart){
	this.boardPos = boardPos
	this.snakePart = snakePart
}