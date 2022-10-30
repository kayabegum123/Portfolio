//declare index varible
var myIndex = 0;
carousel();

//function to get the next image and display
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  //loop through the list of images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //increase the index to get the next image
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // changing the image every 2 seconds
}
