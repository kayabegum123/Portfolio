//declare variable coll to collect all element with class name collapsible
var coll = document.getElementsByClassName("collapsible");
var i;
//itterate through the coll element list display content when clicked
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
