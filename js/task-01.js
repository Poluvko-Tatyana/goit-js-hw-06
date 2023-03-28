const categories = document.querySelectorAll('#categories li.item');
const number = categories.length;
console.dir(`Number of categories:${number}`);

categories.forEach((categorie) => {
    console.dir(`Category: ${categorie.querySelector('h2').textContent}`) 
    console.dir(`Elements: ${categorie.querySelectorAll('li').length}`);
  });