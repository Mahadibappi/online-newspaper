// category start
const loadCategory = async () => {
  try {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data.news_category);
  } catch (err) {
    console.log(err);
  }
};

const displayCategory = (category) => {
  const container = document.getElementById("category");
  category.forEach((element) => {
    const divCategory = document.createElement("div");
    divCategory.classList.add("col");
    divCategory.innerHTML = `
    <ul class="d-flex justify-content-around fs-5">
        <li id="all-category" class="list-group-item border-0">${element.category_name}</li>      
    </ul>          
      `;
    container.appendChild(divCategory);
  });
};
loadCategory();

// news srart
const loadNews = async () => {
  try {
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
  } catch (err) {
    console.log(err);
  }
};

const displayNews = (news) => {
  const newsContainer = document.getElementById("news");
  news.forEach((element) => {
    const newsDiv = document.createElement("div");
    newsDiv.innerHTML = `
    <div  class="card mb-3 bg-black text-white">
   <img  src="${element.image_url}" class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.details}</p>
  </div>
  <div class="row col d-flex justify-content-center align-items-center p-4">
            <div class="col">
                <img style="width:80px" class="rounded-circle p-3"
                src="${element.thumbnail_url}" alt="">
                <span class="fs-5" >${element.author.name}</span>
                 
            </div>                
                <div class="col p-4 m-3">
                <i class="fa-regular fa-eye fa-2x me-3 "></i>
                <span class="fs-3">${element.total_view}K</span>
                </div>
                <div class="col btn btn-success  m-3">
                <span>See More</span>
        </div>
    </div>
 </div>
      
      `;
    newsContainer.appendChild(newsDiv);
  });
};
loadNews();
