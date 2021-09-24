//Set the height of body content minimum to screen size
var minimumHeight = window.innerHeight;
var headerFooterHeights = 280;
document.getElementById("ms-body-id").style.minHeight = `${minimumHeight}` - headerFooterHeights + "px";



//Fetch

    let url = "https://api.github.com/users/";
   const inputValue = document.getElementById("searchInput");
async function fetchAPI() {
    try {
        
        var urlFetch = url+inputValue.value;
        console.log(urlFetch)

    const response = await fetch(urlFetch);
    
    if (response.ok) {
      let json = await response.json();
      console.log(json)
    }
    } catch(e) {
     console.log(e);
    }
   }
document.getElementById("searchClick").addEventListener("click", function(){
    return fetchAPI()

})