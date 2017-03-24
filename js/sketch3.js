var c_Radius;
var c_Color;


//setup colors, etc. 
function setup(){
	colorMode(RGB, 1);
}

function draw(){
	createCanvas(500, 500);
	stroke(0);
	strokeWeight(.5);

	for (y = 0; y < height ; y += 20) 
	for (x = 0; x < width ; x += 20) {
    
    	for (var i = 0; i < 100; i++) {
    		if (mouseX < 500 && mouseY < 500 && mouseY > 2){ 
     			var j = int(dist(x, y, mouseX, mouseY));
    		}

    		else {
    			var j = 200;
    		}
    	};
  		
	    for (var i = 0; i < 100; i++) {    		
	    	c_Radius=j/21;
	    } 

    	for (var i = 0; i < 100; i++) {    		
	    	if (mouseX < 500 && mouseY < 500 && mouseY > 2){ 
	    		c_Color=(255, 255, 255, j/550);
    		}
    		else {
    			c_Color=('black');
    		}
	    } 

	    //drawing it 
		ellipse(x, y, c_Radius, c_Radius);
		fill(c_Color);
	}
}