const loadCategory = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  displayCategory(data.data.news_category);
};

const displayCategory = (category) => {
  const container = document.getElementById("category");
  category.forEach((element) => {
    const divCategory = document.createElement("div");
    divCategory.classList.add("col");
    divCategory.innerHTML = `
    <ul class="d-flex justify-content-around fs-5">
        <li class="list-group-item border-0">${element.category_name}</li>
        
    </ul>
           
      `;
    container.appendChild(divCategory);
  });
};
loadCategory();
