class Drop{
    constructor(x,y){
        var options = {
            friction: 0.1,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,20,options)
        this.radius = 5;
        World.add(world, this.rain);
        this.image=loadImage("s.png")
    }

    update(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

     display(){
        fill("blue")
        imageMode(CENTER);
        image(this.image,this.rain.position.x,this.rain.position.y,50,50);
    }
}