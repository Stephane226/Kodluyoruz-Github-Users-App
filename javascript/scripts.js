//Set the height of body content minimum to screen size
var minimumHeight = window.innerHeight;
var headerFooterHeights = 250;
document.getElementById("ms-body-id").style.minHeight = `${minimumHeight}` - headerFooterHeights + "px";