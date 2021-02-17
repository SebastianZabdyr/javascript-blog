
'use strict';

const opArticleSelector = '.post';

const optTitleSelector = '.post-title';

const optTitleListSelector = '.titles';

const optArticleTagsSelector = '.post-tags .list';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  console.log('remove active class for Artilces ', activeArticles);

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');

  console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  console.log('find the correct article');

  const targetArticle = document.querySelector(articleSelector);

  console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');

  console.log('Add active for clickedArticle', targetArticle);
};
////////////////////////////////////////////////////////////
function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';

  console.log('start generateTitleLinks');

  /* for each article */

  const articles = document.querySelectorAll('.post');

  let html = '';

  for(let article of articles){

    /* get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element */

    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    console.log(linkHTML);

    /* insert link into titleList */

    html = html + linkHTML;
    /*console.log(html);*/
  }


  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  console.log(links);
}

generateTitleLinks();
