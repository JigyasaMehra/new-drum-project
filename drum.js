var numofbuttons=document.querySelectorAll(".drum").length;
for (var i = 0; i < numofbuttons; i++) {
 document.querySelectorAll(".drum")[i].addEventListener("click",function () {
 var cl = this.innerHTML;
 soundMake(cl);
 buttonAnimation(cl);
});
}
document.addEventListener("keypress",function (event) {
 soundMake(event.key);
 buttonAnimation(event.key);
});
 function soundMake(key){
  switch (key) {
    case "j":
    var audio = new Audio('tom-1.mp3');
        audio.play();

      break;
      case "i":
         var audio1 = new Audio('tom-2.mp3');
         audio1.play();

         break;
      case "g":
         var audio2 = new Audio('tom-3.mp3');
         audio2.play();

         break;
      case "y":
         var audio3 = new Audio('tom-4.mp3');
         audio3.play();

        break;
      case "a":
        var audio4 = new Audio('snare.mp3');
           audio4.play();

           break;
      case "s":
      var audio5 = new Audio('kick-bass.mp3');
         audio5.play();

          break;
      case "w":
          var audio6 = new Audio('crash.mp3');
             audio6.play();
             break;

    default:
    console.log(s);

  }
}

function buttonAnimation(currentkey) {
   var ani= document.querySelector("."+currentkey);
   ani.classList.add("pressed");
   setTimeout(function () {
     ani.classList.remove("pressed")
   },100);
}
