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


lang url https://api.github.com/repos/Stephane226/bilim-ve-teknoloji-oyunculari.github.io/languages
reposito url https://api.github.com/users/Stephane226/repos





 const resultArray = Object.keys(languagesData).map((key) => [String(key), languagesData[key]]);
               // console.log(resultArray)
                resultArray.map((datasLang)=>{


                  const languageTitle = datasLang[0];
                  const languageValue = datasLang[1];
                  console.log(languageTitle + " " + languageValue)
        
                })
               
          
                



        function displayLang(){
            const LanguageApi = "https://api.github.com/repos/" + inputValue.value +"/"+ name+"/languages";
            console.log(LanguageApi)
            fetch(LanguageApi).then((resp)=> resp.json()).then((languagesData)=>{
            
                    // return updateValueApi(datas.results)
                   //console.log(languagesData)
                   
            
                   
             const resultArray = Object.keys(languagesData).map((key) => [String(key), languagesData[key]]);
             // console.log(resultArray)
              resultArray.map((datasLang)=>{
            
            
                const languageTitle = datasLang[0];
                const languageValue = datasLang[1];
                console.log(languageTitle + "                        " + languageValue)
            
              })
             
                })
            }
            displayLang()

*/

//Fetch

const repoSide = document.getElementById("repositoriesLand");
console.log(repoSide)
    let url = "https://api.github.com/users/";
   const inputValue = document.getElementById("searchInput");
async function fetchAPI() {








    document.getElementById("repositoriesLand").innerHTML = "";
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
 const public_repos =        !results.public_repos? "No Available":  results.public_repos;        
 const followers = results.followers;
 const following = results.following;
 const repos_url = results.repos_url;
 const bio =   !results.bio? "No Bio Available": results.bio; 
 
 let initializeSize = new Array;
 console.log(initializeSize)

const repositoUrls = "https://api.github.com/users/" + inputValue.value + "/repos"
fetch(repositoUrls).then((resp)=> resp.json()).then((datasUrl)=>{

    datasUrl.forEach(datasUrlData => {
             initializeSize.push(datasUrlData.size)
            const totalSize = initializeSize.reduce((a, b) => a + b)
           const  finalSizeValue = totalSize / 1024 
             document.getElementById("repoSize").innerHTML =  finalSizeValue.toFixed(2) + " MB";

    })

});

document.getElementById("drop-header-cnt").innerHTML = `

<div class="ms-body-right-cnt">
<div class="ms-body-right-top">
    <img class="user-porfil-pic" id="avatar" src="${avatar}"  alt="User_profile">
</div>
<div class="ms-body-right-top right-top-2">
  <div> <div class="title-info"> <i class="fas fa-user"></i><span>PSEUDO :</span></div><span id="pseudo">${userLogin}</span></div> 
  <div> <div class="title-info"> <i class="fas fa-meteor"></i><span>USER NAME :</span></div><span id="userName">${userName}</span></div> 

  <div> <div class="title-info"> <i class="fas fa-project-diagram"></i><span> Repositories :</span></div><span id="public_repo">${public_repos}</span></div> 

</div>


<div class="ms-body-right-top right-top-3">
    <div> <div class="title-info"> <i class="fas fa-user"></i><span>Country :</span></div><span id="location">${location}</span></div> 
    <div> <div class="title-info"> <i class="fas fa-meteor"></i><span>followers:</span></div><span id="followers">${followers}</span></div> 

    <div> <div class="title-info"> <i class="fas fa-project-diagram"></i><span>following :</span></div><span id="following">${following}</span></div> 
</div>


<div class="ms-body-right-top right-top-4">
    <div> <div class="title-info"> <i class="fas fa-user"></i><span>Bio :</span></div><span>${bio}</span></div> 
    <div> <div class="title-info"> <i class="fas fa-meteor"></i><span>Repos Size :</span></div><span id="repoSize" style="background-color:rgb(126 73 117);padding:15px;color:white;border-radius:45%">9.74 MB</span></div> 

    <div> <div class="title-info"> <i class="fas fa-project-diagram"></i><span>USER NAME :</span></div><span>Stephane226</span></div> 
</div>

</div>



`;

const repositoUrl = "https://api.github.com/users/" + inputValue.value + "/repos";
console.log(repositoUrl)

fetch(repositoUrl).then((res)=> res.json()).then((datas)=>{


   // return updateValueApi(datas.results)
     console.log(datas)
  
     datas.forEach(element => {

        const allowFork =  !element.allow_forking? "Fork Not Allowed :(": "Fork Allowed :)";
        const description =   !element.description? "Not Available": element.description;
    const licenseName = element.license;
    const license = !licenseName? "Not Available": licenseName.name;
        const name = element.name;
const mainLanguage =  !element.language? "No Language Detected": element.language;




       

        document.getElementById("repositoriesLand").innerHTML += `
        
        <div class="ms-repo">
        <div class="ms-repo-header">
           <h3>${name}</h3>
        </div>
        <div class="ms-body-right-top right-top-3 ms-repo-header-cnt">
            <div> <div class="title-info-repo"> <i class="fas fa-user"></i><span>Main Language:</span></div> <span style="color:green"> ${mainLanguage}</span></div> 
            <div> <div class="title-info-repo"> <i class="fas fa-meteor"></i><span>Description :</span></div><span>${description}</span> </div> 
            <div> <div class="title-info-repo"> <i class="fas fa-project-diagram"></i><span>Liscence :</span></div><span>${license}</span></div> 
            <div> <div class="title-info-repo"> <i class="fas fa-project-diagram"></i><span>Fork Allow :</span></div><span>${allowFork}</span></div> 
        </div>
    </div>
        
        `;
   
 
  

              
})
});

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



