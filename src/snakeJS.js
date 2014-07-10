window.addEventListener( 'load', function(){
  newGame = new SnakeGameController()
  newGame.View.readyPlayScreen()
  newGame.generateListeners()
  newGame.setUpBoard()
  newGame.setFood()
  newGame.startGame()
})


function SnakeGameController(){
	this.View = new SnakeView();
	this.Model = new SnakeModel();
	this.conInterval = setInterval();
	this.snakeGameBoard = [];
	this.snakeFoodPosition = null
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
		console.log(event.keyCode)
		  switch (event.keyCode) {
		  	case 37:
		  		event.preventDefault()
		  		this.Model.changeDirectionLeft();
		  	break;

		  	case 38:
		  		event.preventDefault()
		  		this.Model.changeDirectionUp();
		  	break;

		  	case 39:
		  		event.preventDefault()
		  		this.Model.changeDirectionRight();
		  	break;

		  	case 40:
		  		event.preventDefault()
		  		this.Model.changeDirectionDown();
		  	break;
		  }

	},
	startGame: function(){
		this.conInterval = setInterval(this.executeTurn.bind(this), 200)
	},

	executeTurn: function(){
		this.View.refreshScreen();
		this.View.updateSnakeScreen(this.Model.allSnakeBodyPositions());
		this.View.paintFoodOnCanvas(this.snakeFoodPosition)
		this.Model.moveSnake();
		this.placeSnakeOnBoard()
		this.gameIsActive()
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
