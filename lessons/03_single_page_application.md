## Lesson 3: Single-page Application

In this lesson we will add more features to our simple Web App from lesson #2. We will build a Single-Page Application, using a template engine. Our data model for now will be a simple list of numbers stored locally.

---

### Lecture

#### Intro to MVC

* As our application grows in complexity, appending elements with JQuery turns out laborious and not effficient.
* *Show my own examples* — This might be ok if you're working by yourself! But...
* The biggest problem with this structure is that the structure and the logics are all embedded into one file. Say you're developing JS for a team, where another person is doing CSS. By simply looking into the html, your colleague has no way of telling what the page is doing. Also, he/she can't assign classes to anything without opening your file and skimming through the code just to find the html part.
* Separating the logics from the rendered result is one of the principals of the architectural pattern Model-View-Controller (MVC).

#### Templates

For now we'll use template engines. Not the same as MVC, but they'll help us get used to its logics.

* [Template-Engine Chooser](http://garann.github.io/template-chooser/)
* [Mustache](https://mustache.github.io/), [Handlebars](http://handlebarsjs.com/), [Underscore](http://underscorejs.org/#template)
* Templates work based on a process called [Data Binding](https://en.wikipedia.org/wiki/Data_binding). 

---

### Working Session: Single-Page Application

* Templates
	* Underscore Template function
	* Binding data to the DOM
* Single-Page Application
	0. Separating logics from content: filtering thumbs after loading the data
	1. Creating the Controller: change appenData() to render()
	2. Creating the View: html structure
	3. Hover effects
	4. localStorage
	5. hashRouter
	
### Extra

* python simple server

---

### Recommended Readings and Sources

* [Model-View-Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
* [Single-Page Application](https://en.wikipedia.org/wiki/Single-page_application)
* [Data Binding](https://en.wikipedia.org/wiki/Data_binding)
* [The Past, PResent, and Future of Local Storage for Web Applications](http://diveintohtml5.info/storage.html)

A full list of resources can be found [here](https://docs.google.com/spreadsheets/d/1Of_llTTAOZ_o8CGmiXSZnMmZBthQvxQiC34YWId9IJs/edit?usp=sharing).