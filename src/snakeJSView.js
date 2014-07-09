function SnakeView(){
	this.SnakeCanvas = document.getElementsByClassName("snake-screen")[0]
	this.canvasContext = this.SnakeCanvas.getContext("2d")
}

SnakeView.prototype = {

	readyPlayScreen: function(){
		this.canvasContext.fillStyle= "rgba(0,0,0,1)"
		this.canvasContext.fillRect(0,0,500,500)
	},

	refreshScreen: function(){
		this.canvasContext.fillStyle= "rgba(0,0,0,1)"
		this.canvasContext.fillRect(0,0,500,500)
	},

	paintSnakeOnCanvas: function(growthPos){
		this.canvasContext.fillStyle= "rgba(255,255,255,1)"
		this.canvasContext.fillRect( this.findXAxis( growthPos ), this.findYAxis( growthPos ), 25, 25 )
	},

	findXAxis: function(growthPos){
		return ( growthPos%20 )*25 
	},

	findYAxis: function(growthPos){
		return Math.floor(growthPos/20) * 25
	},

	updateSnakeScreen: function(arrayOfPositions){
		for(var x=(arrayOfPositions.length-1); x>=0; x--){
			this.paintSnakeOnCanvas(arrayOfPositions[x])
		}
	}
}