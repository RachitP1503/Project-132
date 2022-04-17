img="";
status="";

function preload()
{
    img=loadImage('');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting object";
}

function modelLoaded()
{
    console.log("model loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function draw()
{
circle(20,20,20,20);
}

function gotResult(error,results)
{
if(error){
console.log(error);
}


else{
console.log(results);
}
}

function back(){
    window.location="index.html";
}