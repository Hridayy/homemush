function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
    console.log("poseNet")
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('clown.jpg')
}
function modelLoaded() {
    console.log("PoseNet is Iniciated");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX);
        console.log("noseY =" + noseY);
    }
}