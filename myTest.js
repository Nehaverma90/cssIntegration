function setOptinPostion()

{

  var elem = document.getElementById("optin");
  var leftValue =document.getElementById("leftMarginValue").value;
  var topValue=document.getElementById("topMarginValue").value;
elem.style.display = null;

  elem.style.left = leftValue;
  elem.style.marginTop =topValue;
document.getElementById("dataValue").innerHTML = "The Left Margin :" +  elem.style.left + " The Top Margin for the optin :"
 + elem.style.marginTop;
}

 
function moveRight()
{
var elem = document.getElementById("optin");
elem.style.left = "725px";
elem.style.display = null;
document.getElementById("dataValue").innerHTML = "The Left Margin :" +  elem.style.left + " The Top Margin for the optin :"
 + elem.style.marginTop;
}

function moveLeft()
{
var elem = document.getElementById("optin");
elem.style.left = "295px";
elem.style.display = null;
document.getElementById("dataValue").innerHTML = "The Left Margin :" + elem.style.left + " The Top Margin for the optin :"
 + elem.style.marginTop;
}

function moveCenter()

{
  var elem = document.getElementById("optin");
  elem.style.marginTop ="350px";
  elem.style.left = "500px";
  elem.style.display = null;
  document.getElementById("dataValue").innerHTML = "The Left Margin :" +  elem.style.left + " The Top Margin for the optin :"
 + elem.style.marginTop;
}

function moveBottomRight()
{
  var elem = document.getElementById("optin");
 elem.style.marginTop ="680px";
elem.style.left = "725px";
elem.style.display = null;
document.getElementById("dataValue").innerHTML = "The Left Margin :" +  elem.style.left + " The Top Margin for the optin :"
 + elem.style.marginTop;
}

function moveBottomLeft()
{
  var elem = document.getElementById("optin");
 elem.style.marginTop ="680px";
elem.style.left = "295px";
elem.style.display = null;
document.getElementById("dataValue").innerHTML = "The Left Margin :" +  elem.style.left + " The Top Margin for the optin :"
 + elem.style.marginTop;
}
function defaultPostion()
{
  var elem = document.getElementById("optin");
  elem.style.marginTop = "0px";
  elem.style.left ="500px";
  elem.style.display = null;
  document.getElementById("dataValue").innerHTML = "The Left Margin :" +  elem.style.left + " The Top Margin for the optin :"
 + elem.style.marginTop;
}