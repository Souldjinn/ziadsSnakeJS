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
		this.snakeBody.push(new SnakeGrowth(null, this.snakeBodyLength()))
	},

	allSnakeBodyPositions: function(){
		arrayOfPositions = []
		for(var x=0; x<this.snakeBodyLength(); x++){
			arrayOfPositions.push(this.snakeBody[x].boardPos)
		}
		return arrayOfPositions
	},

//OSIUDFLIWJEF:LKJSDF:LKSJEGF
//EPIPHANY
//Since we keep a record of the direction of the snake
//we can figure out when its going to hit a left or right
//wall. For example, if the snake's next position would be 41,
//and its head position is 1, that means it was moving to the right
//and has hit a wall. In theory I could make the walls now be death
//conditions. But I kind of think I want to leave them open and make
//the snake return to the same row when it passes the wall.
//For now I will just make the snake not die at wall hit.
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
			}else{
				this.snakeHead.boardPos += this.headPosition
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