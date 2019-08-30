## For beginners, these are good habits to follow with regards to the file structure of a website.

### Folder and file names:
* should be lowercase
* should contain no spaces
* may have words separated by dashes (`-`) but not underscores (`_`)

### Basic directory structure:
* (root website folder)
  * `index.html`
  * `styles/` folder &#8722; should hold all and only `.css` files
  * `scripts/` folder  &#8722; should hold all and only `.js` files

The `styles` and `scripts` folders may have subfolders.

### Sample directory structure:
* (root website folder)
  * `index.html`
  * `images/` folder
    * `cats/` folder
      * `cat.jpg`
      * `morecats.gif`
    * `dogs/` folder
      * `dog.png`
      * `doge.bmp`
  * `styles/` folder
    * `layout.css`
    * `main.css`
    * `nav.css`
  * `scripts/` folder
    * `myscript.js`
    * `anotherscript-2.0.1.js`
    * `etc.js`
  * `members/` folder
    * `index.html`
    * `events.html`
  * `about.html`
  * `contact.html`
  * `terms.html`
  * `privacy.html`
  * `faq.html`
  * `search.php`

Most file names are examples.

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

---

### See MDN's guide [here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files).