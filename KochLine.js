function KochLine(a,b){

	this.start = a.copy()
	this.end = b.copy();	


	this.display = function(){
		stroke(0);
		line(this.start.x,this.start.y, this.end.x,this.end.y);
	}



	this.kochA =function(){
		return this.start.copy();
	}
	this.kochB =function(){

	}
	this.kochC =function(){

	}
	this.kochD =function(){

	}
	this.kochE =function(){
		return this.end.copy()
	}
	
}