let card = document.getElementById("container");
let apiKey = "80ea482a256d4dce918d1a042dd288b8";
let source = "the-times-of-india";
let url = `https://newsapi.org/v2/everything?sources=${source}&sortBy=top-headlines&apiKey=${apiKey}`;
let xhr = new XMLHttpRequest();
xhr.open("get", url, true);
xhr.onload = function (element) {
  let json = JSON.parse(this.responseText);
  let articles = json.articles;
  console.log(articles);
  let newsCard = "";
  articles.forEach(function (element) {
    let carditem = `<div class="m-4" >
  <div class="card" style="max-width: 1000px; height: fit-content; border: 2px solid black">
      <div class="row g-0">
          <div class="col-sm-5" style="background: #868e96;">
              <img src="${element['urlToImage']}" class="card-img-top h-100" alt="...">
          </div>
          <div class="col-sm-7">
              <div class="card-body">
                  <h5 class="card-title">${element['title']}</h5>
                  <p class="card-text">${element['description']}</a>
              </div>
              <a href="${element['url']}" class="btn btn-dark mx-3" style="margin-bottom: 15px" target='_blank'>Read More</a>
          </div>
      </div>
  </div>
</div>`;
    newsCard += carditem;
  });
  card.innerHTML = newsCard;
};

xhr.send();
