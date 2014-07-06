window.addEventListener( 'load', function(){
  newGame = new SnakeGameController()
  newGame.View.readyPlayScreen()
  newGame.startGame()
})


function SnakeGameController(){
	this.View = new SnakeView();
	this.Model = new SnakeModel();
	this.conInterval = setInterval(); 
}

SnakeGameController.prototype = {
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
		if(this.Model.snakeBody[1].boardPos< 20){
			return true
		}else{
			clearInterval(this.conInterval)
			console.log("GAME OVER")
			return false
		}
	}
}
