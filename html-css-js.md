---
---
<h1 style="border:0px;margin:0;padding:0;">HTML, CSS, and JavaScript</h1>
<p><strong><em>What's the difference?</em></strong></p>

---
<h3 style="margin:0px">HTML - The Structure</h3>
<p><strong>It tells your browser which information goes into which container.</strong></p>

> HTML stands for HyperText Markup Language. "Markup language" means that, rather than using a programming language to perform functions, HTML uses tags to identify different types of content and the purposes they each serve to the webpage.
_([source](https://blog.hubspot.com/marketing/web-design-html-css-javascript))_

Say you have an article that you want to post to the web. Suppose this article has the following elements: a title, an author, a date, and content. The resulting HTML sans data might be:  
```html
<div class="article">
  <h2 class="article-title"></h2>
  <div class="article-metadata">
    <span class="article-metadata-author"></span>
    <span class="article-metadata-date"></span>
  </div>
  <div class="article-content"></div>
</div>
```  
It is clear which elements should contain what information about the article.  

HTML files do not usually specify how elements are visually presented; CSS usually does that task.  

---
<h3 style="margin:0px">CSS - The Style</h3>
<p><strong>It tells your browser how the content is visually presented.</strong></p>

CSS can control anything about an individual element's appearance, such as its [border, margin, and padding](https://www.w3schools.com/css/css_boxmodel.asp), font, color, and size.  

```css
* {
  margin: 0px;
  padding: 0px;
}

.article {
  width: 850px;
  border: solid 1px silver;
}

h2 {
  text-decoration: underline;
  line-height: 1.62;
}

.article-title {
  color: blue;
}
```

---
<h3 style="margin:0px">JavaScript - The Manipulator</h3>
<p><strong>It tells your browser to do stuff.</strong></p>

JavaScript is a programming language that your web browser can interpret. It can tell your browser how elements on the webpage should behave (such as submitting a form when you click a button, filling in blanks with new information when the page has loaded, or validating input while you type).  
```js
const ARTICLE_LIMIT = 10;

function updateArticles(relatedTags) {
  var articleContainers = document.getElementsByClassName("article");
  
  var relatedArticles = findRelatedArticlesFromTags(relatedTags, ARTICLE_LIMIT);
  
  for (var i = 0; i < articlesContainers.length; i++) {
    if (i > ARTICLE_LIMIT || i > relatedArticles.length) { break; }
    updateArticleContainer(articleContainers[i], relatedArticles[i]);
  }
}

function updateArticleContainer(dst, src) {
  dst.getElementsByClassName("article-title")[0].innerText = src.title;
  dst.getElementsByClassName("article-content")[0].innerText = src.content;
  dst.getElementsByClassName("article-metadata-author")[0].innerText = src.author;
  dst.getElementsByClassName("article-metadata-date")[0].innerText = src.date;
}
```

---
For a more details and examples, [this blog post](https://blog.hubspot.com/marketing/web-design-html-css-javascript) is a good resource to start at.  

