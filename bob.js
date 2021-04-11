class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
            restitution:0.3,
            friction:0,
            density:1.2		
			}
		this.x=x;
		this.y=y;
		this.r=r;
		
var bobDiameter = this.r*2;
		this.body=Bodies.circle(this.x, this.y,this.r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER);
            fill('red');
			circle(0,0,this.r);
			pop();
			
	}

}