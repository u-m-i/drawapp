/**
 * Makes lines with only two vertex, one vertex per click
 * @constructor
 */
function LineToTool(){
  /**
   * @property {string} icon - Path to an static jpg or jpeg image
   * @property {string} name - Name to display in the tool bar
   */
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

  /* Setting defaults values */
	var startMouseX = -1; // -1 read as an empty
	var startMouseY = -1;
	var drawing = false;

  /**
   * Called every frame, draws a line that follows the mouse
   * @function
   */
	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){ // If X coordinate is empty
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
        /* Save the state of the canvas in the pixel array */
				loadPixels();
			}

			else{
        /* Use the pixel array to paint the canvas in its current state */
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){ 
      /* Once the click is dropped set all to default */
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}

/**
 * Documented following [JSDocs](https://jsdoc.app/)
 *
 * updatePixels reference: https://p5js.org/reference/p5/updatePixels/
 * loadPixels reference: https://p5js.org/reference/p5/loadPixels/
 * 
 * It is also very important to understand the pixel array -> https://p5js.org/reference/p5/pixels/
 * 
 * This project is being hosted in https://github.com/u-m-i/drawapp, star it and will star yours back!
 */

