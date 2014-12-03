function RGBtoGreyscale(RGBImageData) {
	var greyscaleImageData = new Array(); // Variable for the greyscale data
	for(var i = 0; i < RGBImageData.length; i += 4) {
		// Speed is key so we use bit shifting to simplify R*0.25 + G*0.5 + B*0.25
        var brightness = (RGBImageData[i] >> 2) + (RGBImageData[i + 1] >> 1) + (RGBImageData[i + 2] >>2);
        greyscaleImageData[i >> 2] = brightness;
    }
    return greyscaleImageData;
}

function greyscaletoRGB(greyscaleImageData) {
	var RGBImageData = new Array(); // Variable for the greyscale data
	for(var i = 0; i < greyscaleImageData.length; i++) {
		// Set R, G and B to be the same as the greyscale value and opacity as 255
		var brightness = greyscaleImageData[i];
        RGBImageData[4 * i] = brightness; // red
        RGBImageData[(4 * i) + 1] = brightness; // green
        RGBImageData[(4 * i) + 2] = brightness; // blue
        RGBImageData[(4 * i) + 3] = 255; // opacity
    }
    return RGBImageData;
}

function verticalEdges(greyscaleImageData, width, height){
	for(var x = 0; x < width; x++) {
		
	}
	return greyscaleImageData;
}

function horizontalEdges(){
}

