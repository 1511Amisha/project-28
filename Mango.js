class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.image=loadImage("Plucking mangoes/mango.png");
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius

        World.add(world,this.body)
           
    }
    display(){
            image(this.image,100,90,50,60);
                 
        ellipseMode(RADIUS);
        circle(this.body.position.x, this.body.position.y, this.radius);
    }
}
//image(this.image, 0, 0, this.width, this.height);
