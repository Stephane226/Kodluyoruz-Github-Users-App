//Set the height of body content minimum to screen size
var minimumHeight = window.innerHeight;
var headerFooterHeights = 280;
document.getElementById("ms-body-id").style.minHeight = `${minimumHeight}` - headerFooterHeights + "px";

//HTML variables declaration 
/*
const pseudo = document.getElementById("pseudo");
const userName = document.getElementById("userName");
const avatar = document.getElementById("avatar");
const location = document.getElementById("location");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const public_repo = document.getElementById("public_repo");








 
*/





//Fetch

const repoSide = document.getElementById("repositoriesLand");
console.log(repoSide)
    let url = "https://api.github.com/users/";
   const inputValue = document.getElementById("searchInput");
async function fetchAPI() {
    try {
        
        var urlFetch = url+inputValue.value;
  

    const response = await fetch(urlFetch);
    
    if (response.ok) {
      let results = await response.json();
  

 const userName = results.name;
 const userLogin = results.login;
 const avatar = results.avatar_url;
 const profileUrl = results.html_url;
 const location = results.location;
 const public_repos = results.public_repos;
 const followers = results.followers;
 const following = results.following;
 const repos_url = results.repos_url;
 const bio = results.bio;
 






document.getElementById("drop-header-cnt").innerHTML = `

<div class="ms-body-right-cnt">
<div class="ms-body-right-top">
    <img class="user-porfil-pic" id="avatar" src="${avatar}"  alt="User_profile">
</div>
<div class="ms-body-right-top right-top-2">
  <div> <div class="title-info"> <i class="fas fa-user"></i><span>PSEUDO :</span></div><span id="pseudo">${userLogin}</span></div> 
  <div> <div class="title-info"> <i class="fas fa-meteor"></i><span>USER NAME :</span></div><span id="userName">${userName}</span></div> 

  <div> <div class="title-info"> <i class="fas fa-project-diagram"></i><span>Public Repositories :</span></div><span id="public_repo">${public_repos}</span></div> 

</div>


<div class="ms-body-right-top right-top-3">
    <div> <div class="title-info"> <i class="fas fa-user"></i><span>Country :</span></div><span id="location">${location}</span></div> 
    <div> <div class="title-info"> <i class="fas fa-meteor"></i><span>followers:</span></div><span id="followers">${followers}</span></div> 

    <div> <div class="title-info"> <i class="fas fa-project-diagram"></i><span>following :</span></div><span id="following">${following}</span></div> 
</div>


<div class="ms-body-right-top right-top-4">
    <div> <div class="title-info"> <i class="fas fa-user"></i><span>Bio :</span></div><span>${bio}</span></div> 
    <div> <div class="title-info"> <i class="fas fa-meteor"></i><span>USER NAME :</span></div><span>Stephane226</span></div> 

    <div> <div class="title-info"> <i class="fas fa-project-diagram"></i><span>USER NAME :</span></div><span>Stephane226</span></div> 
</div>

</div>



`;



fetch(repos_url)
  .then(responseRepo => responseRepo.json)
  .then(commits => {

    repoSide.innerHTML = commits.map(data =>{
         

       
        console.log(data);
const repoName =data.name;
console.log(repoName)
const allow_forking = data.allow_forking;

   
const contributors_url = data.contributors_url;
const dateCreated = data.created_at;
const description = data.description;
const languagesUsed = data.languages_url;
const mainLanguage = data.language;
const liscence = data.license.name;

return `
        
<div class="ms-repo">
<div class="ms-repo-header">
   <h3>${repoName}</h3>
</div>
<div class="ms-body-right-top right-top-3 ms-repo-header-cnt">
<div> <div class="title-info-repo"> <i class="fas fa-project-diagram"></i><span>Description :</span></div><span>${description}</span></div> 
    <div> <div class="title-info-repo"> <i class="fas fa-user"></i><span>Languages </span>:<span>${mainLanguage}</span></div> 
    <div> <div class="title-info-repo"> <i class="fas fa-meteor"></i><span>Contributors :</span></div><span></span> </div> 
    <div> <div class="title-info-repo"> <i class="fas fa-project-diagram"></i><span>Liscence :</span></div><span>${liscence}</span></div> 
    <div> <div class="title-info-repo"> <i class="fas fa-project-diagram"></i><span>Fork Allow :</span></div><span>${allow_forking}</span></div> 
</div>
</div>


`
 
    
    })
    
})





    }
    else{
        alert("No User!")
    }
    } catch(e) {
     console.log(e);
    }
   }

  
document.getElementById("searchClick").addEventListener("click", function(){
    return fetchAPI();
    

})


