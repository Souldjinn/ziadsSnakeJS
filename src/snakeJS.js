window.addEventListener( 'load', function(){
  newGame = new SnakeGameController()
  newGame.View.readyPlayScreen()
})


function SnakeGameController(){
	this.View = new SnakeView();
	// this.Model = new SnakeModel();
}