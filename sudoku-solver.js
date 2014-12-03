var video = document.querySelector('video'); // Find the video element in the page
var canvas = document.querySelector('canvas'); // Find the canvas element
var context = canvas.getContext('2d'); // Use the 2D canvas context
var button = document.querySelector('input'); // Find the button
// Load test image
var image = new Image();
image.src = "test-images/test1.jpg";
// Stupid browser prefixes needed
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;
//navigator.getUserMedia({video: true, audio: false}, getUserMediaSuccess, getUserMediaError); // Get just the user video stream

// On success
function getUserMediaSuccess(){
	video.src = window.URL.createObjectURL(localMediaStream); // Set the video element source to be the video being recorded
}

// On error alert the error
function getUserMediaError(error){
	alert(error); 
}


function setImage(){
	// Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, 400, 400, 0, 0, 400, 400);
    getSudokuGrid();
}

function getSudokuGrid(){
    // Resize canvas to image size
    canvas.height = image.height;
    canvas.width = image.width;
    context.drawImage(image, 0, 0); // Copy the image onto the canvas
    imageData = context.getImageData(0,0,image.width,image.height); // Get the canvas image data
    var greyscaleData = greyscaletoRGB(RGBtoGreyscale(imageData.data)); // Make image greyscale
    imageData.data.set(greyscaleData);
    context.putImageData(imageData, 0, 0);
    
    //var edgeData = greyscaletoRGB(verticalEdges(greyscaleData, image.width, image.height));
    //imageData.data.set(edgeData);
    //context.putImageData(imageData, 0, 0);
	
	// Perform vertical edge detection
	// Extract vertical sudoku edges
	// Perform horizontal edge detection
	// Extract vertical sudoku edges
	// Build 10x10x2 array of corner locations
	var cornerLocations = [
                           [[4,4],[59,4],[114,4],[169,4],[224,4],[279,4],[334,4],[389,4],[444,4],[499,4]],
                           [[4,59],[59,59],[114,59],[169,59],[224,59],[279,59],[334,59],[389,59],[444,59],[499,59]],
                           [[4,114],[59,114],[114,114],[169,114],[224,114],[279,114],[334,114],[389,114],[444,114],[499,114]],
                           [[4,169],[59,169],[114,169],[169,169],[224,169],[279,169],[334,169],[389,169],[444,169],[499,169]],
                           [[4,224],[59,224],[114,224],[169,224],[224,224],[279,224],[334,224],[389,224],[444,224],[499,224]],
                           [[4,279],[59,279],[114,279],[169,279],[224,279],[279,279],[334,279],[389,279],[444,279],[499,279]],
                           [[4,334],[59,334],[114,334],[169,334],[224,334],[279,334],[334,334],[389,334],[444,334],[499,334]],
                           [[4,389],[59,389],[114,389],[169,389],[224,389],[279,389],[334,389],[389,389],[444,389],[499,389]],
                           [[4,444],[59,444],[114,444],[169,444],[224,444],[279,444],[334,444],[389,444],[444,444],[499,444]],
                           [[4,499],[59,499],[114,499],[169,499],[224,499],[279,499],[334,499],[389,499],[444,499],[499,499]]
                          ];
    context.strokeStyle = "#FF0000";
    var squareWidth = 0;
    var squareHeight = 0;
	// For each column of squares
	for(var x = 0; x < 9; x++) {
		// For each row of squares
		for(var y = 0; y < 9; y++) {
			squareWidth = cornerLocations[x+1][y+1][0] - cornerLocations[x][y][0];
			squareHeight = cornerLocations[x+1][y+1][1] - cornerLocations[x][y][1];
			context.rect(cornerLocations[x][y][0], cornerLocations[x][y][1], squareWidth, squareHeight);
			context.stroke();
			
			// Find approximate y location of the middle of the square
			
			// Find x location of the left side of the square which is most towards the right
			//var xLeft;
			// Find x location of the right hand side of the square which is most towards the left
			//var xRight;
			//cornerLocations[x][y][0];
			//var lineLength = xRight-xLeft;
			//if (lineLength < 0) {
			//	alert('error');
			//}
			//perform edge detection along line
			// If edge is above threshold perform number matching
			// Else assume blank square
			
			
		}
	}
	// For each quad does it contain a number?
	// For each quad with a number transform quad into square
	// For each square perform number matching
	// Create grid of numbers
	var grid;
	 
	
}
function solveSudokuGrid(grid){
	// Create row, column and square objects
	// Iterate possibles until none left
	// Create guessing tree
	// Iterate through the guessing tree until a match is found
	// Maximum depth on guessing tree
	return solvedGrid;
}
button.addEventListener('click', setImage, false); // When video element is clicked run setImage function
