var speechrRcognition=window.webkitSpeechRecognition;
var recogation=new speechrRcognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recogation.start();
    }
    recogation.onresult=function(event){
        console.log(event);
        var content=event.results[0][0].transcript;
        document.getElementById("textbox").innerHTML=content;
if(content == "take my selfie"){
speak();
}

        

    }
    function speak(){
        var synth=window.speechSynthesis;

        speak_data="taking your selfie in 5 second"
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
        Webcam.attach("camera");
         setTimeout(function(){
             take_snapshot();
save();
         },5000)
         ;
             
    
    }
    camera=document.getElementById("camera");
Webcam.set({
    widtth:360,height:360,image_format:'jpeg',jpeg_quality:90
})
;
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image"src="'+data_uri+'">';
    })
    ;
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}