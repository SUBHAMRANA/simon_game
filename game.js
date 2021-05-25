var gamepattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var level=0;
var started=false;
$(document).keypress(function()
{
  if(!started)
  {
    $("#level-title").text("Level "+level);
    nextsequence();
    started=true;
  }
});
$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playsound(userChosenColour);
  checkanswer(userClickedPattern.length-1);
  //console.log(userClickedPattern);
});
function checkanswer(currentlevel)
{
  if(gamepattern[currentlevel]==userClickedPattern[currentlevel])
  {
    console.log("success");
    if(gamepattern.length==userClickedPattern.length)
    {
      setTimeout(function()
    {
      nextsequence();
    },1000);
    }
  }
  else{
    playsound("wrong");
    console.log("wrong");
    $("body").addClass("game-over");
    setTimeout(function()
  {
    $("body").removeClass("game-over");
  },200);
  $("#level-title").text("Game Over, Press Any Key to Restart");
  gameover();
  }
}
function gameover()
{
  level=0;
  gamepattern=[];
  started=false;
}
function nextsequence()
{
  userClickedPattern=[];
  var randomnumber=Math.floor(Math.random()*4);
  var randomchoosencolor=buttonColors[randomnumber];
  gamepattern.push(randomchoosencolor);
  $("#"+randomchoosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
  level+=1;;
  playsound(randomchoosencolor);
  $("#level-title").text("Level "+level);


}
function playsound(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress( currentcolor)
{
  $("#"+currentcolor).addClass("pressed");
  setTimeout(function(){
      $("#"+currentcolor).removeClass("pressed");
  },100);
}
//animatePress("red");
//nextsequence();
