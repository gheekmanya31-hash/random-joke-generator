async function getJoke(){

const loading=document.getElementById("loading");
const setup=document.getElementById("setup");
const punchline=document.getElementById("punchline");

loading.innerText="Loading...";
setup.innerText="";
punchline.innerText="";

try{

const response=await fetch("https://official-joke-api.appspot.com/random_joke");

if(!response.ok){
throw new Error("Failed to fetch joke");
}

const data=await response.json();

loading.innerText="";
setup.innerText=data.setup;
punchline.innerText=data.punchline;

}
catch(error){

loading.innerText="Something went wrong!";
}

}