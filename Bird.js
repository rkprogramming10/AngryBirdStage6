class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    //loaded smokeImage
    this.smoke= loadImage("sprites/smoke.png");
    //empty trajectory arrey
    this.trajectory=[];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    
    //create position array only when bird is on the right side & speed is >10
    if(this.body.velocity.x>10 && this.body.position.x>200){
      //crreated position array to stored x & y position of bird 
      var position=[this.body.position.x,this.body.position.y];
      //pushed position array inside trajectory array
      this.trajectory.push(position);
    }

    //created a loop to display smoke image along the trajectory
    for(var i=0; i < this.trajectory.length; i++){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
    }
    
  }
}
