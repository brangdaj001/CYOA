let Start = function(){
let name = document.getElementById("nameInput").value;
document.getElementById("IDS").innerHTML = "You wake up an see pitch black darkness but a tiny bit of light down a path.There are two paths to choose from What do you do " + name + '<br><br><input type="radio" name="userChoice1" id="radio1"> <label for="radio1">Go towards the light</label><br><input type="radio" name="userChoice1" id= "radio2"><label for= "radio2"> Go down the dark path</label><br>  <input type="button" value = "Choose" onclick="runIt()">';
};
let runIt=function(){
if(document.getElementById('radio1').checked){
document.getElementById("IDS").innerHTML = "Fall to your death";
}else if (document.getElementById('radio2').checked){
document.getElementById("IDS").innerHTML = "Your now in a room with a sign that reads throw something at me you see two weapons -which one will you pick up?<br><br><input type='radio' name='userChoice1' id='radio1'> <label for='radio1'>Pick up the gun</label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>Pick up the hatchet</label><br>  <input type='button' value = 'Choose' onclick='choice1()'>";
}
};

let choice1 =function(){
if(document.getElementById('radio1').checked){
  document.getElementById("IDS").innerHTML = " You shoot at the wall and the bullets bounce off a hit you in the head. You die immediately. ";

}else if (document.getElementById('radio2').checked){
  document.getElementById("IDS").innerHTML =" You throw the hatchet at the wall an it becomes a lever an the door opens when you take it out.You hear a crying baby from the side of the room in a very dark corner. You can see a door that seems to lead outside!!! Will you grab the baby or will you run for an escape??!<br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> grab the baby</label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>You run for the outside! </label><br>  <input type='button' value = 'Choose' onclick='choice2()'>";
}
};
let choice2 =function(){
  if(document.getElementById('radio1').checked){
    document.getElementById("IDS").innerHTML ="You decide to run a grab the baby ~ Turns out it's not a baby! It's a creature that wants to eat you! It bites your foot off an you bleed out - It pays to be a good person huh haha";
 }else if (document.getElementById('radio2').checked){
  document.getElementById("IDS").innerHTML ="You run for the outside! - Turns out it was just a backdrop. You run a hit your head on a brick wall. You're then knocked out and drug somewhere.When you come to your head is banging. Someone has left you some pain killers an a glass of water will you take it?<br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> Dont take pills</label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>Take pills </label><br>  <input type='button' value = 'Choose' onclick='choice3()'>";
}
};
let choice3=function(){
   if(document.getElementById('radio1').checked){
     document.getElementById("IDS").innerHTML ="You decide not to take the pain pills are left lying on a dirty floor in hopes that the pain will go away soon. You fall asleep  the room  fills with water an you drown - you die";
}else if (document.getElementById('radio2').checked){
document.getElementById("IDS").innerHTML ="You decide to take the painkillers the water tastes a bit like metal but other than that your headache begins to disappear. You begin to realize the room begins to fill with water. You jump up an see a tiny crawl space will you go down it?!<br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> Go through the crawl space</label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>Wait it out</label><br>  <input type='button' value = 'Choose' onclick='choice4()'>";
}
};

let choice4=function(){
   if(document.getElementById('radio1').checked){
 document.getElementById("IDS").innerHTML = "Go through the crawl space ~ The water is filling up an you are now in the crawl space everything clear. suddenly you hear a noise! An your quickly knocked out buy a wave of water - you die"; 
}else if (document.getElementById('radio2').checked){
document.getElementById("IDS").innerHTML ="Wait it out - As the water begins to fill the room you realize as the water is filling up the room the pressure of the water is cracking open a door.The water is near to opening the door but the water is over your head. You take one more deep breath and when you think it's the end the door opens an your flushed out with the water.ou are now in a kitchen. Their is a huge feast! What are you going to eat???<br> <input type='checkbox' id='checkClass1'>chicken<br><input type='checkbox' id='checkClass2'>fish <br><input type='checkbox' id='checkClass3'>rice<br><input type='checkbox' id='checkClass4'>mac and cheese<br><input  type='button' value = 'Choose' onclick='choice5()'>";
}
};
let choice5=function(){
   if(document.getElementById('checkClass1').checked){
document.getElementById("IDS").innerHTML = "You are stuffed and feel that you can take on anything Suddenly you hear something running towards you!!! What will you do???<br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> Hide </label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>Run</label><br>  <input type='button' value = 'Choose' onclick='choice6()'>";

}else if (document.getElementById('checkClass2').checked){
document.getElementById("IDS").innerHTML ="You are stuffed and feel that you can take on anything Suddenly you hear something running towards you!!! What will you do???<br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> Hide </label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>Run</label><br>  <input type='button' value = 'Choose' onclick='choice6()'>";

}else if (document.getElementById('checkClass3').checked){
document.getElementById("IDS").innerHTML = "You are stuffed and feel that you can take on anything Suddenly you hear something running towards you!!! What will you do???<br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> Hide </label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>Run</label><br>  <input type='button' value = 'Choose' onclick='choice6()'>";

}else if(document.getElementById('checkClass4').checked){
document.getElementById("IDS").innerHTML = "You are stuffed and feel that you can take on anything Suddenly you hear something running towards you!!! What will you do???<br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> Hide </label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>Run</label><br>  <input type='button' value = 'Choose' onclick='choice6()'>";

}
};
let choice6=function(){
   if(document.getElementById('radio1').checked){
     document.getElementById("IDS").innerHTML ="You decided to hide under the dining room table but the creature can smell you a finds you immediately you die.";
}else if (document.getElementById('radio2').checked){
  document.getElementById("IDS").innerHTML ="You run super fast you - find a door!. You open it and shut it behind you. You have two choices find a way out or get a weapon and fight what will you do!!!<br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> Fight </label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>Find a way out</label><br>  <input type='button' value = 'Choose' onclick='choice7()'>";

}
};
let choice7=function(){
   if(document.getElementById('radio1').checked){
     document.getElementById("IDS").innerHTML ="You decided to fight the creature! It busts down the door an the only thing you could find was a pipe. It growls at you an snatches it from your hand! It then begins to kill you with the pipe!";

}else if (document.getElementById('radio2').checked){
     document.getElementById("IDS").innerHTML =" You decided to find a way out. You're looking around and see a small hatch you can just barely squeeze through. But you do. Your now ina  tunnel which way will you turn? <br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> left </label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>right</label><br>  <input type='button' value = 'Choose' onclick='choice8()'>";
}
};
let choice8=function(){
   if(document.getElementById('radio1').checked){
     document.getElementById("IDS").innerHTML ="Your crawling and crawling and you begin to hear the floor creak underneath you. You then fall through faced with the monster before! He eats you out of anger :(";

}else if (document.getElementById('radio2').checked){
     document.getElementById("IDS").innerHTML =" You decide to go right your no faced with another room! But this time the wall reads to get out consume the trout. It's a dead fish hanging from the ceiling, what will you do! <br><br><input type='radio' name='userChoice1' id='radio1'><label for='radio1'> Don't eat it  </label><br><input type='radio' name='userChoice1' id= 'radio2'><label for= 'radio2'>Eat it</label><br>  <input type='button' value = 'Choose' onclick='choice9()'>";

}
};
let choice9=function(){
   if(document.getElementById('radio1').checked){
     document.getElementById("IDS").innerHTML ="You scream “I'M NOT EATING THAT” An a door opens! You run towards the door to be faced with a disgusting growling snarling bear! - He then decides to keep you as a pet! For the rest of your life - The end!";

}else if (document.getElementById('radio2').checked){
     document.getElementById("IDS").innerHTML ="You decide to eat the fish its the most disgusting thing ever but a door opens! I You can see the outdoors!! You run for it! Only to realize you've been tricked again! You scream “LET ME OUT” a voice repeats their is no way out hahaha - the end!";

}
};
