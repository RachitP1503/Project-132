img="";
status="";
object=[];

function preload()
{
    img = loadImage('BedRoom.jpg');
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
}

function gotResult(error,results)
{
if(error){
console.log(error);
}

console.log(results);
objects=results;

}

function back(){
    window.location="index.html";
}