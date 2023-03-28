const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liEl = ingredients.map((ingredient) =>{
const li = document.createElement("li")
li.textContent = ingredient;
li.classList.add('item');
return li
}
);

console.log(liEl)


const ul = document.querySelector('#ingredients');
ul.append(...liEl);




