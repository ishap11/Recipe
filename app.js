const app_id = "e7ab9f4b";
const app_key = "1ef1afc998142ee5701d1da078d1a6ce";

var button = document.querySelector("button");
console.log(button);
 


const get_recipe = async () => {
 var input = document.querySelector("input");
console.log(input);

    const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=${input.value}&app_id=${app_id}&app_key=${app_key}'); 
    const data = await response.json();
    console.log(data);
} ;

button.addEventListener("click",get_recipe);