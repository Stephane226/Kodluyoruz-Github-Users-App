//Set the height of body content minimum to screen size
var minimumHeight = window.innerHeight;
alert(minimumHeight)
var headerFooterHeights = 280;
document.getElementById("ms-body-id").style.minHeight = `${minimumHeight}` - headerFooterHeights + "px";