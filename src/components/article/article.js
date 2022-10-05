import './article.less'
import data from './Data'
// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules


/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>
*/

function articleMaker(article) {

  const articleDiv = document.createElement('div');
  articleDiv.classList.add('article');

  const header = document.createElement('h2');
  header.textContent = article.title;

  
  const date = document.createElement('p');
  date.classList.add('date');
  date.textContent = article.date;

  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');

  const span = document.createElement('span');
  span.classList.add('expandButton');
  span.textContent = "+";

  paragraph1.textContent = article.firstParagraph;
  paragraph2.textContent = article.secondParagraph;
  paragraph3.textContent = article.thirdParagraph;

  articleDiv.appendChild(header);
  articleDiv.appendChild(date);
  articleDiv.appendChild(paragraph1);
  articleDiv.appendChild(paragraph2);
  articleDiv.appendChild(paragraph3);
  articleDiv.appendChild(span);

  return articleDiv;
}


const articles = document.querySelector('.articles');
const dataElements = data.map((article) => articles.appendChild(articleMaker(article)));


/*

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
