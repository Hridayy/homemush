function preload() {
 mush=loadImage("https://i.postimg.cc/6qVHyR72/mushtache2.png");
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

function take_snapshot() {
    save('mushtache.jpg')
}
function modelLoaded() {
    console.log("PoseNet is Iniciated");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        mushX = results[0].pose.mush.x;
        mushY = results[0].pose.mush.y;
        console.log("mushX =" + mushX);
        console.log("mushY =" + mushY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mush,mushX,mushY,30,30)
}
