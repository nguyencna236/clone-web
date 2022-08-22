
const endpoint = "https://icanhazdadjoke.com/";

const head = document.querySelector('.head-joke')
const random = document.querySelector('.random-joke')
const color = document.querySelector(".random-color");

const load = document.querySelector('.load')
async function api(){
   const response = await fetch(endpoint,{
    headers: {
      Accept: "application/json",
    } 
   });
   const data = await response.json();
   return data;
}
random.addEventListener('click',handle)
async function handle(){
  load.classList.remove('no')
  head.classList.add('no')
  data = await api()
  load.classList.add('no')
  head.textContent = data.joke;
  head.classList.remove('no')
}
var br = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
color.addEventListener('click',handlecolor)
function handlecolor(){
  change = '';
  for(var i = 0 ; i < 6; i ++){
      ran = Math.floor(Math.random()*br.length)
      change += br[ran]
    }
    document.body.style.background = `#${change}`;
    console.log(change)
}
