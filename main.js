var status="";
object=[];
var ob;
var toFind;
function preload(){
};
function setup(){
    Canvas=createCanvas(500 ,450);
    Canvas.position(550 ,300);
    ObjectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML= "Status - Detecting Object";
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
     
};
function draw(){
 image(video ,0 ,0 ,500 ,450);
 if(status!=""){ 
    ObjectDetector.detect(video,gotResult);
     for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML= "Status - Object Detected";
        fill(255,0,0);
        percentage=floor(object[i].confidence*100);
        text(object[i].label+" "+percentage+"%",object[i].x+70,object[i].y+100);
        noFill();
        stroke(255,0,0);
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
     };
 };
};
function modelLoaded(){
console.log("model is loaded"); 
status=true;

};
function gotResult(error,results){
    if(error){
        console.log(error);
            }
    else{        
                console.log(results);
                object=results;
                ob=results[0].label;
                console.log(ob);
            };        
};
function search(results){
    toFind=document.getElementById("word").value ;
if( toFind != ob){
document.getElementById("detec").innerHTML=toFind + " Not Found";
}
else{
    document.getElementById("detec").innerHTML=toFind + " Found";
    };
};
