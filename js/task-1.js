const totalCategoriesList = document.querySelectorAll('#categories .item');
console.log('Загальна кількість категорій:', totalCategoriesList.length);

totalCategoriesList.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const count = item.querySelectorAll('li').length;

  console.log(title);
  console.log(count);
});