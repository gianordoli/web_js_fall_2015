## Lesson 6: Server-Side

In this lesson we will start developping JavaScript for the server-side. We will set up a simple server using NodeJS, create an API, and make it interact with the client requests.  
We will also see some other useful features in NodeJS, like scraping and saving files.

---

### Lecture

#### Server-side

* What is a web server?  
	* We usually think of a web server as a huge computer somewhere, sending pages back as we type an address on the browser.
	* The term might refer to the software serving the pages too. We can have more than one server running in the same machine, for example. — we did that with  ```$ python -m SimpleHTTPServer 8000```

* The HTTP protocol
	* History
		* Though implemented by Tim-Berners Lee at CERN, the term *hypertext* was coined by Ted Nelson in his Project Xanadu
	* The HTTP takes a REQUEST and sends back a RESPONSE
	* The REQUEST usually includes information such as:
		* HTTP methods: GET, POST (+ PUT and DELETE)
		* url
		* User-agent
		* 
	* Request and Respond
* Server-side languages
	* PHP, Python, Java, ASP, Ruby...
	* NodeJS
		* Node is relatively new, it was created in 2009 by Ryan Dahl and collaborators
		* Features:
			* Cross-plattform (supports OS X, Windows, and Linux)
			* Non-blocking I/O
			* JavaScript Syntax
		* NodeJS *is not* a different language. We the write the same exact JS!
		* We make extensive use of modules in NodeJS. Think of them as JS libraries — or C++ *include*, or Processing *import*
		* With NodeJS we can:
			* Create a web server
			* Communicate with databases
			* Create APIs
			* Communicate with hardware
			* ...

---

### Working Session: NodeJS

* Simple NodeJS HTTP Server
* NodeJS + [Express](http://expressjs.com/) API
	* [Node Package Manager](https://www.npmjs.com/) (npm)
	* Initializing package ```$ npm init```
	* Installing packages ```$ npm install express body-parser --save```
		* gitgnore the modules
		* reinstall using ```$ npm install```
	* [HTTP methods: GET vs POST](http://www.w3schools.com/tags/ref_httpmethods.asp)
	* Router
	* API
* NodeJS + Express Server Basic Setup
	* Static files
	* body-parser module
	* JQuery post

	
### Extra

* [.gitignore templates](https://github.com/github/gitignore)
* [nodemon](https://www.npmjs.com/package/nodemon)
* Scraping with [request](https://www.npmjs.com/package/request) and [cheerio](https://www.npmjs.com/package/cheerio)
* [Downloading music from Spotify](https://github.com/TooTallNate/node-spotify-web)

---

### Recommended Readings and Sources

* Technical
	* [HTTP methods: GET vs POST](http://www.w3schools.com/tags/ref_httpmethods.asp)

* History
	* [As We May Think](http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/), Vannevar Bush
	* [The Curse of Xanadu](http://archive.wired.com/wired/archive/3.06/xanadu.html), Wired Magazine


### Required Tools

* [NodeJS](https://nodejs.org/)
* [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en) Chrome Extension

---

### Assignment

Create an app that interacts with the file system. No user input required, but that might make things more interesting. As usual, try to match this with your personal interests. Maybe you want to [visualize your files/file structure](https://gabrielmfadt.wordpress.com/2014/02/23/defrag-style-data-visualization/)? Or create a [game that permanently deletes your files](http://www.stfj.net/art/2009/loselose/)? Or make an [OS-like website](http://www.windows93.net/)?  
**Bonus:** as usual, *make it interact with an API*.