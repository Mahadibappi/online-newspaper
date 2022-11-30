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
    <div class="col-sm-12 col-lg-12">
    <ul class="d-flex justify-content-around fs-5 w-75">
        <li id="all-category" class="list-group-item border-0">${element.category_name}</li>      
    </ul> 
    </div>         
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

// load news detail

const loadDetail = async (id) => {
  const url = ` https://openapi.programming-hero.com/api/news/${id}`
  const res = await fetch(url)
  const data = await res.json()
  displayDetail(data.data);


}


const displayDetail = (detail) => {
  detail.forEach(info => {
    const image = document.getElementById("image")
    image.innerHTML = ` <img style="width:90px" class="rounded-circle p-3" src=${info.author.img} alt="">`
    const title = document.getElementById('exampleModalLabel')
    title.innerText = `${info.author.name}`
    const date = document.getElementById("date")
    date.innerText = ` Published Date: ${info.author.published_date}`

    const desc = document.getElementById("title")
    desc.innerText = `${info.title}...read more`

  })
  console.log(detail);

}
const displayNews = (news) => {
  const newsContainer = document.getElementById("news");
  news.forEach((element) => {
    const newsDiv = document.createElement("div");
    newsDiv.innerHTML = `
    <div class="col col-lg-12">
    <div  class="card mx-auto mb-5  bg-black text-white" style="width: 40rem;">
   <img  src="${element.image_url}" class="card-img-top" alt="image" style="height: 300px;">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.details.slice(0, 200)}</p>
  </div>
  <div class="row col d-flex justify-content-center align-items-center p-4">
            <div class="col">
                <img style="width:80px" class="rounded-circle p-3"
                src="${element.thumbnail_url}" alt="">
                <span class="fs-6 p-2" >${element.author.name}</span>                
            </div>                
                <div class="col p-4 m-3">
                <i class="fa-regular fa-eye fa-2x me-3 "></i>
                <span class="fs-3">${element.total_view}K</span>
                </div>
               
            <div>
                <button onClick="loadDetail('${element._id
      }')" class="col btn btn-sm btn-success p-2 m-3 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal"  >
                See Detail
        </button>
            </div>
    </div>
 </div>
 </div>
      
      `;
    newsContainer.appendChild(newsDiv);
  });
};
loadNews();


