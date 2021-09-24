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
      let results = await response.json();
      console.log(results);

 const userName = results.name;
 const userLogin = results.login;
 const avatar = results.avatar_url;
 const profileUrl = results.html_url;
 const location = results.location;
 const public_repos = results.public_repos;
 const followers = results.followers;
 const following = results.following;
 const repos_url = results.repos_url;








    }
    else{
        alert("No User!")
    }
    } catch(e) {
     console.log(e);
    }
   }
document.getElementById("searchClick").addEventListener("click", function(){
    return fetchAPI()

})