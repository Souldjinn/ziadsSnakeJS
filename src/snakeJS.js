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
		this.View.updateSnakeScreen(this.Model.allSnakeBodyPositions())
	}
}
