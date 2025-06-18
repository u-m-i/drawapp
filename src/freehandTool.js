function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
        /**
         * Adding a constant to previous or to current will augment the thickness
         */
        strokeWeight(0.40);
        stroke(40, 200);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				line(previousMouseX+1, previousMouseY, mouseX+1, mouseY);
        strokeWeight(0.45);
        stroke(32, 190);
				line(previousMouseX+2, previousMouseY+1, mouseX+3, mouseY+1);
				line(previousMouseX+5, previousMouseY, mouseX+5, mouseY);
				line(previousMouseX+6, previousMouseY+2, mouseX+6, mouseY+2);
				line(previousMouseX+6, previousMouseY, mouseX+7, mouseY);
				line(previousMouseX+7, previousMouseY, mouseX+8, mouseY);
				line(previousMouseX+7, previousMouseY, mouseX+8, mouseY);
				line(previousMouseX+9, previousMouseY, mouseX+9, mouseY);
				line(previousMouseX+10, previousMouseY, mouseX+10, mouseY);
        strokeWeight(0.47);
        stroke(40, 200);
				line(previousMouseX+12, previousMouseY, mouseX+13, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
        loadPixels();
        if(showLog) console.log(pixels);
        
        if(showLog) showLog = false;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
}

/**
 * Documentation
 * [Stroke](https://p5js.org/reference/p5/stroke/)
 */