'use strict';

/*
document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});
*/

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  const clickedArticle = this;
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

  console.log('Add active for clickedElement', clickedElement /*, activeLink*/);

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post post.active');

  for(let activeArticle of activeArticles){
    activeArtilce.classList.remove('active');
  }

  console.log('remove active class for Artilces ', activeArticles);

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = function(){
    href = clickedElement.getAtributte('href');
  }

  console.log('get href attribute from the clicked link ', clickedElement);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector('.post');

  console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */

  clickedArticle.classList.add('active');

  console.log('Add active for clickedArticle', clickedArticle);
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
