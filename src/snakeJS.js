window.addEventListener( 'load', function(){
  newGame = new SnakeGameController()
  newGame.View.readyPlayScreen()
  newGame.generateListeners()
  newGame.setUpBoard()
  newGame.setFood()
  newGame.startGame()
})


function SnakeGameController(){
	this.View = new Canvas();
	this.Model = new SnakeModel();
	this.conInterval = setInterval();
	this.snakeGameBoard = [];
	this.snakeFoodPosition = null
	this.playerScore = 0
}

SnakeGameController.prototype = {
	setUpBoard: function(){
		for(var i=0; i<400; i++){
			this.snakeGameBoard.push(0)
		}
		this.placeSnakeOnBoard()
	},

	setFood: function(){
		randomNum = this.randomNumberGen();
		while(this.snakeGameBoard[randomNum]==1){
			randomNum= this.randomNumberGen();
		}
		this.snakeGameBoard[randomNum] = 2
		this.snakeFoodPosition = randomNum
	},

	randomNumberGen: function(){
		randomNum= Math.random() * (400 - 0)
		randomNum= Math.round(randomNum)
		return randomNum
	},

	clearBoard: function(){
		for(var i=0; i<400; i++){
			this.snakeGameBoard[i] = 0
		}
	},

	placeSnakeOnBoard: function(){
		this.clearBoard();
		for(var i=0; i<this.Model.snakeBodyLength(); i++){
			snakePosition = this.Model.snakeBody[i].boardPos
			this.snakeGameBoard[snakePosition] = 1
		}
		this.snakeGameBoard[this.snakeFoodPosition] =2
	},

	generateListeners: function(){
		window.addEventListener("keydown", this.changeSnakeDirection.bind(this), false)
	},
	changeSnakeDirection: function(event){
		  switch (event.keyCode) {
		  	case 37:
		  		this.changeDirection( event, this.Model.changeDirectionLeft )
		  	break;

		  	case 38:
		  		this.changeDirection( event, this.Model.changeDirectionUp )
		  	break;

		  	case 39:
		  		this.changeDirection( event, this.Model.changeDirectionRight )
		  	break;

		  	case 40:
		  		this.changeDirection( event, this.Model.changeDirectionDown )
		  	break;
		  }

	},

	changeDirection: function( e, direction ){
		e.preventDefault()
		direction.call( this.Model )
		this.generateFluidMoves()
	},

	generateFluidMoves: function(){
		clearInterval(this.conInterval)
		this.executeTurn()
		this.conInterval = setInterval(this.executeTurn.bind(this), 200)
	},

	startGame: function(){
		this.conInterval = setInterval(this.executeTurn.bind(this), 200)
	},

	executeTurn: function(){
		this.fullViewRefresh()
		this.Model.moveSnake();
		this.placeSnakeOnBoard()
		this.snakeEatingCheck();
		this.gameIsActive()
	},

	fullViewRefresh: function(){
		this.View.refreshScreen();
		this.View.updateSnakeScreen(this.Model.allSnakeBodyPositions());
		this.View.paintFoodOnCanvas(this.snakeFoodPosition)
	},

	snakeEatingCheck: function(){
		if(this.Model.snakeBody[0].boardPos === this.snakeFoodPosition){
			this.snakeHasEaten()
		}
	},

	snakeHasEaten: function(){
		this.setFood()
		this.Model.growSnake();
		this.playerScore +=1
	},

	gameIsActive: function(){
		if(this.Model.snakeBody[1].boardPos< 400){
			return true
		}else{
			clearInterval(this.conInterval)
			console.log("GAME OVER")
			return false
		}
	}
}
