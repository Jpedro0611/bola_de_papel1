class Paper
{
	constructor(x,y,r)
	{
		var options = {
			'density':1.2,
			'friction':0,
			'restitution':0.3
		}
		this.x=x;
		this.y=y;
		this.r=r;
		// this.PaperWidth=30;
		// this.PaperHeight=30;
		this.body = Bodies.circle(this.x,this.y,this.r/2,options)
		this.image=loadImage("paper.png")
		World.add(world,this.body);
		
		

	}
	display(){
		
			push()
			rectMode(CENTER)
			fill(255)
			translate (this.body.position.x,this.body.position.y)
			image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}