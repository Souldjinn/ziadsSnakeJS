function SnakeView(){
	this.SnakeCanvas = document.getElementsByClassName("snake-screen")[0]
}

SnakeView.prototype = {

	readyPlayScreen: function(){
		canvasContext = this.SnakeCanvas.getContext("2d")
		canvasContext.fillStyle= "rgba(0,0,0,1)"
		canvasContext.fillRect(0,0,500,500)

	}
}