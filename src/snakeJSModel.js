function SnakeModel(){
	this.snakeBody = []
	this.snakeBody.push(new SnakeGrowth(2, 0))
	this.snakeBody.push(new SnakeGrowth(1, 1))
	this.snakeBody.push(new SnakeGrowth(0, 2))

	this.headPosition = 1
}

SnakeModel.prototype = {
	snakeBodyLength: function(){
		return this.snakeBody.length
	},

	growSnake: function(){
		this.snakeBody.push(new SnakeGrowth(null, this.snakeBodyLength()))
	},

	allSnakeBodyPositions: function(){
		arrayOfPositions = []
		for(var x=0; x<this.snakeBodyLength(); x++){
			arrayOfPositions.push(this.snakeBody[x].boardPos)
		}
		return arrayOfPositions
	},

	moveSnake: function(){
		for(var x=(this.snakeBodyLength()-1); x>=1; x--){
			this.snakeBody[x].boardPos = this.snakeBody[x-1].boardPos
		}
		this.snakeBody[0].boardPos += this.headPosition
	},

	changeDirectionUp: function(){
		if( this.headPosition!== 20 ){
			this.headPosition = -20
		}
	},

	changeDirectionDown: function(){
		if( this.headPosition!== -20 ){
			this.headPosition = 20
		}
	},


	changeDirectionRight: function(){
		if( this.headPosition!== -1 ){
			this.headPosition = 1
		}
	},

	changeDirectionLeft: function(){
		if( this.headPosition!== 1 ){
			this.headPosition = -1
		}
	}
}


function SnakeGrowth(boardPos, snakePart){
	this.boardPos = boardPos
	this.snakePart = snakePart
}