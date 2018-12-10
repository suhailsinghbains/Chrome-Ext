var s = function( sketch ) {

    var x = 100; 
    var y = 100;
    console.log("1");
  
    sketch.setup = function() {
      var c=sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
      c.position(0,0);
      c.style('pointer-event', 'none');
        sketch.clear();
        console.log("2");
    };
  
    sketch.draw = function() {
      sketch.stroke(0);
      sketch.strokeWeight(4);
      if(sketch.mouseIsPressed){
          sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
      console.log("3");
    };
  };
  
  var myp5 = new p5(s);