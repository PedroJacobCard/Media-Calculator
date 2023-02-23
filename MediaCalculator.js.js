/* the keepMessage function will handle the another function and the return false statement 
wiil prevent the page of being refreshed*/ 
function keepMessage (message) {
    document.getElementById("showValue").innerHTML = message;
    return false;
  }
  /* the event.preventDefault method will work with the the previous function to prevent the page of being refreshed*/ 
  function showValue(event) {
    event.preventDefault();
      var N1 = document.getElementById("N1").value;
      var N2 = document.getElementById("N2").value;
      var N3 = document.getElementById("N3").value;
      var N4 = document.getElementById("N4").value;
      var sum = [N1,N2,N3,N4];
      var add = eval(`${sum.join('+')}`);
      var div = 4;
      var addDiv = add / div;
      if (addDiv >= 6.0 || addDiv >= 7.0){
          keepMessage(addDiv + " Congrat's! You're aproved! ");
          changeColor("green");
          changeMouth("M 115 100 Q 90 120 67 100")
      } else {
          keepMessage(addDiv + " I'm sorry, you're reproved ");
          changeColor("red");
          changeMouth("M 115 114 Q 90 90 67 114")
      }
  }
 
  /*those funtions handles the svg tags and attributes inner html and transforms it into a happy face or sad face,
   dependding on the message of the previous function*/
  function changeColor(color) {
    var circleElement = document.getElementById("mySVG").getElementsByTagName("circle")[0];
    circleElement.setAttribute("fill", color);
  }

function changeMouth(path){
  var pathElement = document.getElementById("mySVG").getElementsByTagName("path")[0];
    pathElement.setAttribute("d", path);
}