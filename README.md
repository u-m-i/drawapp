
# Draw app

Generic draw app with a touch of my own design, but with a particular feeling of wanting to enhance some part of the over all experience.

## Super brainstorm

- Make undo over each operation
- Improve spray can density and style
- Allow to save project and to export
- Allow to make 3D figures

## Planning

### Task 1: Choose a design pattern

To allow the code to be extensible and comprehensible it is necessary to choose a structure on which to base anything upon.

### Task 2: Create the appropiate classes

Once the structure is choosed, the classes and the project domain logic have to be adapted.

### Task 3: Type safety

On various scripts, some checks were done to see if objects contained the required properties, like in the next snippet:

```
if (toolbox.selectedTool.hasOwnProperty("draw")) {
  toolbox.selectedTool.draw();
} else {
  alert("it doesn't look like your tool has a draw method!");
}
```

This check is time consuming and it could be done earlier in the execution. How?

## File structure & functions

*Index.html:* The outlines of the HTML content of the application. This is a bit more complex than some of the other HTML files you will have seen in p5.js programmes. Some of this application is built on the DOM and outside of the canvas. There are also a lot of script imports. These files make up the rest of the application, along with p5.dom and the style sheet.
*style.css:* The style sheet. As we are using the DOM, this handles the layout and look of the application. 
*sketch.js:* The p5.js sketch, which declares any global variables, setup and draw.
*p5.min.js:* The p5 library – thankfully we don’t have to know what goes on inside here!
*colourPalette.js and toolbox.js:* These are two container functions that have been written for you. You don’t need to fully understand them but you might want to use some of their properties. For example, selectedTool gets the current tool that has been selected by the user.
*helperFunctions.js:* A place to write functions that either don’t necessarily belong to objects or that you want to use multiple times. Right now, it contains click handlers for the 'clear' button and the 'save image' button.
*lineToTool.js, freehandTool.js and mirrorDrawTool.js:* All tools that appear in the tool box. 

For tools to work, they have to have: a property called 'icon', which is an URI for an image for the tool icon; a property called 'name', which is a string name for the tool; and a draw function.

### Aditional resources

[Journal](https://docs.google.com/document/d/1YfSfQXn442uYNtxgi3IpvSF41wdDeOncpdcn3jXqh2c/edit?usp=sharing) Where all the though process is documented and almost all the planning occours - And a little bit of German for practice.