function SnakeModel(){
	this.snakeBody = []
	this.snakeBody.push(new SnakeGrowth(2, 0))
	this.snakeBody.push(new SnakeGrowth(1, 1))
	this.snakeBody.push(new SnakeGrowth(0, 2))
	this.headPosition = 1
	this.snakeHead = this.snakeBody[0]
}

SnakeModel.prototype = {
	snakeBodyLength: function(){
		return this.snakeBody.length
	},

	growSnake: function(){
		this.snakeBody.push(new SnakeGrowth(this.findLastPosition(), this.snakeBodyLength()))
	},

	findLastPosition: function(){
		return this.snakeBody[(this.snakeBodyLength()-1)].boardPos
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
			if(this.willHitRightWall()){
				this.snakeHead.boardPos -= 19
			}else if(this.willHitLeftWall()){
				this.snakeHead.boardPos += 19
			}else if(this.willHitUpperWall()){
				this.snakeHead.boardPos += 380
			}else if(this.willHitBottomWall()){
				this.snakeHead.boardPos -=380
			}else{
				this.snakeHead.boardPos += this.headPosition
			}
	},

	willHitBottomWall: function(){
		if( ( (this.snakeHead.boardPos +20 ) > 399 ) && (this.headPosition === 20)){
			return true
		}else{
			return false
		}
	},

	willHitUpperWall: function(){
		if( ( (this.snakeHead.boardPos - 20) < 0) && (this.headPosition === -20)){
			return true
		}else{
			return false
		}
	},

	willHitLeftWall: function(){
		if( ( (this.snakeHead.boardPos - 1) %20 == 19) && (this.headPosition === -1) ){
			return true
		}else{
			return false
		}

	},

	willHitRightWall: function(){
		if( ((this.snakeHead.boardPos + 1 ) %20 === 0) && (this.headPosition === 1) ){
			return true
		}else{
			return false
		}
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