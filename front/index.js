const api = 'http://localhost:3000/api/teddies';

const insertArticle = async () => {

    const article = await fetch('${api}').json();

    console.log(article.name);
}

console.log(article.name);