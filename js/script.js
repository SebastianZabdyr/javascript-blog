
'use strict';

const optArticleSelector = '.post';

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
/////////////////////////////////////////////////////////////////////////////////////////////////////
function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

  titleList.innerHTML = '';

  console.log('start generateTitleLinks');

  /* for each article */
const articles = document.querySelectorAll(optArticleSelector + customSelector);


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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  console.log(clickedElement);

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  console.log(href);

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  console.log(tag);

  /* find all tag links with class active */

  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  console.log(activeTags);

  /* START LOOP: for each active tag link */

  let html = '';

  console.log(html);

  for(let activeTag of activeTags){

    /* remove class active */

    /*  const activeLinks = document.querySelectorAll('.titles a.active');*/

    for(let activeTag of activeTags){
      activeTag.classList.remove('active');
    }

  }
  /* END LOOP: for each active tag link */


  /* find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  console.log(tagLinks);

  /* START LOOP: for each found tag link */

  for (let tagLinks of document){

    /* add class active */

    tagLinks.classList.add('active');

    console.log('targetTagLinks is ', tagLinks);

  }
  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');

}
/*tagClickHandler();*/







//////////////////////////////////////////







function generateTags(){

  /* find all articles */

  console.log('find all');

  const articles = document.querySelectorAll('.post');

  console.log(articles);

  /* START LOOP: for every article: */

  console.log('START LOOP Art');

  for(let article of articles){


    /* find tags wrapper */

    console.log('wrapper');

    const tagWrapper = article.querySelector(optArticleTagsSelector);


    /* make html variable with empty string */

    console.log('string');

    let html = '';

    /* get tags from data-tags attribute */

    console.log('data-tags');

    const articleTags = article.getAttribute('data-tags');

    console.log(articleTags);

    /* split tags into array */

    console.log('split tags');

    const articleTagsArray = articleTags.split(' ');

    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    console.log('START LOOP tag');

    for(let tag of articleTagsArray){

      console.log(tag);

      /* generate HTML of the link */

      console.log('generate HTML');

      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';

      console.log(linkHTML);

      /* add generated code to html variable */

      console.log('add generated code');

      html += linkHTML;

      console.log(html);

      /* check data tags name */


    }
    /* END LOOP: for each tag */

    console.log('END LOOP: for each tag');

    /* insert HTML of all the links into the tags wrapper */
    console.log('insert HTML');

    tagWrapper.innerHTML = html;

    const links = document.querySelectorAll(optArticleTagsSelector);

    for(let link of links){

      link.addEventListener('click', tagClickHandler);
    }

    console.log(links);

    /* END LOOP: for every article: */

    console.log('END LOOP: for every article');
  }
}

generateTags();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////
