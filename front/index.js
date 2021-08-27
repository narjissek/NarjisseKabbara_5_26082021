const api = 'http://localhost:3000/api/teddies';

const insertArticle = async () => {

    const articles = await fetch('${api}').json();

    console.log(article);

    for (let article of articles) {

        document.getElementById("app").innerHTML = 
        
        '<div class="mx-auto px-5">
            <div class="card" style="width: 18rem;">
                <img src="${article.imageUrl}" class="card-img-top" alt="${article.name}">
                <div class="card-body" id="article">
                    <h5 class="card-title" id="article-titre">${article.name}</h5>
                    <p class="card-text" id="article-description">${article.description}</p>
                    <p class="font-weight-bold card-text"><span id="article-prix">${article.price}</span>€</p>
                </div>
            </div>
        </div>'
        
    }
}

insertArticle();