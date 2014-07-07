window.addEventListener( 'load', function(){
  newGame = new SnakeGameController()
  newGame.View.readyPlayScreen()
  newGame.generateListeners()
  newGame.startGame()
})


function SnakeGameController(){
	this.View = new SnakeView();
	this.Model = new SnakeModel();
	this.conInterval = setInterval(); 
}

SnakeGameController.prototype = {
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
		this.conInterval = setInterval(this.executeTurn.bind(this), 500)
	},

	executeTurn: function(){
		this.View.refreshScreen();
		this.View.updateSnakeScreen(this.Model.allSnakeBodyPositions());
		this.Model.moveSnake();
		console.log(this.Model.snakeBody[1].boardPos)
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
