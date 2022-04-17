img="";
status="";
objects=[];
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
  

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log('Model Loaded');
    status=true;
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    
   console.log(results);
   objects=results;
   
   
    
    
}
function preload(){
    img=loadImage("images (9).jpg");
}
function draw(){
    image(img,0,0,380,380);
}
   