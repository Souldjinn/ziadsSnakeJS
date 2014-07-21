function Canvas(){
	this.canvas = document.getElementsByClassName("snake-screen")[0]
	this.ctx = this.canvas.getContext("2d")
}

Canvas.prototype = {

	readyPlayScreen: function(){
		this.ctx.fillStyle= "rgba(0,0,0,1)"
		this.ctx.fillRect(0,0,500,500)
	},

	refreshScreen: function(){
		this.ctx.fillStyle= "rgba(0,0,0,1)"
		this.ctx.fillRect(0,0,500,500)
	},

	paintSnakeOnCanvas: function(growthPos){
		this.ctx.fillStyle= "rgba(255,255,255,1)"
		this.ctx.fillRect( this.findXAxis( growthPos ), this.findYAxis( growthPos ), 25, 25 )
	},

	paintFoodOnCanvas: function(foodPos){
		this.ctx.fillStyle= "rgba(255,0,0,1)"
		this.ctx.fillRect( this.findXAxis( foodPos ), this.findYAxis( foodPos), 25, 25 )
	},

	findXAxis: function(growthPos){
		return ( growthPos%20 )*25
	},

	findYAxis: function(growthPos){
		return Math.floor(growthPos/20) * 25
	},

	updateSnakeScreen: function(arrayOfPositions){
		for( var x = ( arrayOfPositions.length - 1 ); x >= 0; x-- ){
			this.paintSnakeOnCanvas( arrayOfPositions[x] )
		}
	}
}