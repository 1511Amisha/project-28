class Stone{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }

       this.image=loadImage("Plucking mangoes/stone.png")

        this.body=Bodies.rectangle(x,y,options)
        

        World.add(world,this.body)
   }

   display(){

    image(this.image,200,200,50,60);
    rectMode(CENTER)
    
    rect(this.body.position.x,this.body.position.y)

    
   }
      
   
    
}