var snakeSound = new Audio();
snakeSound.src = "snakeSound.mp3";
function loadContent(num){
  snakeSound.play();
  var div1 = document.getElementById("div1");
  div1.innerHTML = "Loaded content for section" +num;
}
