var video = document.querySelector('video'); // Find the video element in the page
var canvas = document.querySelector('canvas'); // Find the canvas element
var context = canvas.getContext('2d'); // Use the 2D canvas context
// Stupid browser prefixes needed
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;
navigator.getUserMedia({video: true, audio: false}, getUserMediaSuccess, getUserMediaError); // Get just the user video stream

// On success
function getUserMediaSuccess(){
	video.src = window.URL.createObjectURL(localMediaStream); // Set the video element source to be the video being recorded
}

// On error alert the error
function getUserMediaError(error){
	alert(error); 
}


function setImage(){
    context.drawImage(video, 0, 0, 400, 400, 0, 0, 400, 400);
}
video.addEventListener('click', setImage, false); // When video element is clicked run setImage function
