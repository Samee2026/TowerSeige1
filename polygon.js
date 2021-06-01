class Polygon{
    constructor(){
     
    var options={
       restitution:0.6,
       friction:1.2,
       density:2
    }

    this.polygon = Bodies.circle(50,200,20,options)
    this.polygon = loadImage("polygon.png");
  }
  display(){
  
  }
}
