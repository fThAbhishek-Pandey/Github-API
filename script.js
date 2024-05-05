// github info
const avtaar = document.querySelector('#avtaar');
const followers = document.querySelector('#follower');
const following = document.querySelector('#following');
const name = document.querySelector('#name');
const bio = document.querySelector('#bio');
const mylocation = document.querySelector('#location');
const publicRepo = document.querySelector('#publicRepo');
const  created_at = document.querySelector('#created_at');
const updated_at = document.querySelector('#updated_at');

const requrl = 'https://api.github.com/users/fThAbhishek-Pandey';
const xhr= new XMLHttpRequest();
xhr.open('GET',requrl);
xhr.onreadystatechange= function (){
//    console.log(xhr.readyState);
    if (xhr.readyState === 4){
        // console.log(this.responseText);
        const data = JSON.parse(this.responseText);// when the data come by url the it also come as datatype of string . we convert it into object create a JSON file
        // console.log(typeof data);
       followers.innerHTML = data.followers;
       following.innerHTML= data.following;
       name.innerHTML= data.name;
       bio.innerHTML = data.bio;
       mylocation.innerHTML= data.location;
       publicRepo.innerHTML =data.public_repos;
       created_at.innerHTML =data.created_at;
       updated_at.innerHTML=data.updated_at;
       avtaar.innerHTML= `<img  id="img" src="https://avatars.githubusercontent.com/u/121682915?v=4" alt="">`
    }
}
xhr.send();
// github repo
// const requrl2 = 'https://api.github.com/users/fThAbhishek-Pandey/repos';
// const xhr2= new XMLHttpRequest();
// xhr2.open('GET',requrl2);
// xhr2.onreadystatechange= function (){
//    console.log(xhr2.readyState);
//     if (xhr2.readyState === 4){
//         console.log(this.responseText);
//         const repo = JSON.parse(this.responseText);// when the data come by url the it also come as datatype of string . we convert it into object create a JSON file
//         console.log(typeof repo);
      
//     }
// }
// xhr2.send();
// const repos = document.querySelector('#repos');
// const requrl2 = 'https://api.github.com/users/fThAbhishek-Pandey/repos';
// const xhr2 = new XMLHttpRequest();
// xhr2.open('GET', requrl2);
// xhr2.onreadystatechange = function () {
//     console.log(xhr2.readyState);
//     if (xhr2.readyState === 4) {
//             console.log(this.responseText);
//             const repo = JSON.parse(this.responseText); // Parse response text to JSON object
//             console.log(typeof repo.full_name);
//             repos.innerHTML= repo.full_name;//`<span>${repo.name}</span>`;
//     }
// }
// xhr2.send();
