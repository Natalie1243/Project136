status_model = "";

function setup() {
canvas= createCanvas(500, 450);
canvas.center();
video = createCapture(VIDEO);
video.size(500, 450);
}

function preload() {
video.hide();
}

function draw(){
image(video, 0, 0, 500, 450);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting objects";
    value = document.getElementById('input').value;

}

function modelLoaded() {
    console.log('Model Loaded');
    status_model = true;
}