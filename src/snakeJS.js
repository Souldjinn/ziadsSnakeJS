window.addEventListener( 'load', function(){
  newGame = new SnakeGameController()
  newGame.View.readyPlayScreen()
  newGame.startGame()
})


function SnakeGameController(){
	this.View = new SnakeView();
	this.Model = new SnakeModel();
}

SnakeGameController.prototype = {
	startGame: function(){
		while(this.gameIsActive()){
			this.View.refreshScreen();
			this.View.updateSnakeScreen(this.Model.allSnakeBodyPositions());
			this.Model.moveSnake();
		}
	},

	gameIsActive: function(){
		if(this.Model.snakeBody[1].boardPos< 20){
			return true
		}else{
			return false
		}
	}
}
