function setup(){
	createCanvas(500, 500);
	colorMode(HSB, 1);
	noLoop(); 
}

function draw(){
	noStroke();
	var y = 10;
	for (y = 0; y < height ; y += 10) 
	for (x = 0; x < width ; x+=10) {
		rect(x,y,10,10); 
		var ratio = x/width;
	  	var hue = ratio;
	 	for (var i = y ; i <= height; i++) {
		    var saturation = map(i, y, y+height, 1, 0); //why the cell in the top left corner was not being affected by the loop until i added no loop because it was drawing continuously/restarting
	    }
		var brightness = 1;
	  	fill(hue, saturation, brightness);
    } 
}