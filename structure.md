---
title: Website File Structure Guidelines
---

# How should I organize files for my website?
#### [MDN's guide on website file structure](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)

## Good habits to follow

### Folder and file names:  
* should be lowercase  
* should contain no spaces  
* may have words separated by hyphens `-` but not underscores `_`  

### Basic directory structure:
```
.
|-- index.html
|-- styles/    (holds CSS files)
|   `-- main.css
`-- scripts/   (holds JavaScript files)
    `-- myscript.js
```

### Sample directory structure:
```
.
|-- index.html
|-- images/
|   |-- cats/
|   |   |-- cat.jpg
|   |   `-- more-cats.gif
|   `-- dogs/
|       |-- dog.png
|       `-- doge.bmp
|-- styles/
|   |-- layout.css
|   |-- main.css
|   `-- nav.css
|-- scripts/
|   |-- myscript.js
|   |-- anotherscript-2.0.1.js
|   `-- etc.js
|-- members/
|   |-- index.html
|   `-- events.html
|-- about.html
|-- contact.html
|-- terms.html
|-- privacy.html
|-- faq.html
`-- search.php
```

---
### How to use `images/cats/cat.jpg` in `index.html`:
```html
  <img src="images/cats/cat.jpg">
```
### How to use `images/dogs/dog.png` in `members/events.html`:
```html
  <img src="../images/dogs/dog.png">
```
The `../` goes up a directory.  
When we are at `events.html`, we are inside the `members/` directory. From here, we have to travel up a directory, where we can then access `images/`, `scripts/`, and even `search.php`.  
<!--
### Here's another way to access `dog.png` from `events.html`:
```html
  <img src="/images/dogs/dog.png">
```
Did you notice that the reference path started with `/`? This means that we start our directory navigation from the root directory. Thus, we can be on any page in any subdirectory of this site, and this reference will lead to the same `dog.png` from each page.  
-->
---
Last modified on 8/29/2019.  
_more tips to possibly come..._  
