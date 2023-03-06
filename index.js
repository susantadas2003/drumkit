
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click",function(){



var value = this.innerHTML;

 switch (value) {
   case "w":
   var audio = new Audio("sounds/crash.mp3");
   audio.play();


     break;
     case "a":
     var audio = new Audio("sounds/kick-bass.mp3");
     audio.play();


       break;
       case "s":
       var audio = new Audio("sounds/snare.mp3");
       audio.play();


         break;
         case "d":
         var audio = new Audio("sounds/tom-1.mp3");
         audio.play();


           break;
           case "j":
           var audio = new Audio("sounds/tom-2.mp3");
           audio.play();


             break;
             case"k":
             var audio = new Audio("sounds/tom-3.mp3");
             audio.play();


               break;
               case "l":
               var audio = new Audio("sounds/tom-4.mp3");
               audio.play();


                 break;
               };


 });

}


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click",function(){



var value = this.innerHTML;

MakeSound(value);
animation(value);
});
}


document.addEventListener("keydown",function(){
  MakeSound(event.key);
  animation(event.key);
});

function MakeSound(key){
  switch (key) {
    case "w":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();


      break;
      case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();


        break;
        case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();


          break;
          case "d":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();


            break;
            case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();


              break;
              case"k":
              var audio = new Audio("sounds/tom-3.mp3");
              audio.play();


                break;
                case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();


                  break;
                };




}


function animation(key){

  var ActionButton=document.querySelector("."+key);
  ActionButton.classList.add("pressed");

  setTimeout(function(){
      ActionButton.classList.remove("pressed");
  },100);

}
