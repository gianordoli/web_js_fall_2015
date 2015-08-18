## Lesson 4: Databases

We have been using a primitive way of storing data so far. If we want to build something scalable though, we need databases. In this lesson we will see database types, data structures, and discuss the pros and cons of cloud databases.  
In the working session, we will create a simple collection using the Parse web interface. After that, we will learn how to access Parse via API on the client side.

---

### Lecture

#### Databases

* [Wikipedia](https://en.wikipedia.org/wiki/Database) will tell us that "a database is an organized collection of data."
* Based on that, a database can be a JSON file, HTML, XML, TSV, CSV, or even a simple Array — which is the case for our localStorage in the last class.
* In IT though, database often refers to a structure that includes the software to manipulate the data — the "Database Management System" (DBMS).

#### Create, Read, Update and Delete (CRUD)

* Take a look into our app from the previous class. Because we are using a simple comma-separated String as a DB, we had to hard-code things that would be simpler in a real Database — read, split into an Array, check for existing elements, overwriting the existing data, cleaning up after removing, etc.
* Performing those actions is not simple when dealing with permanent storage. If we were using a file — JSON or TSV —, we would have to check if the file has finished saving, store it on the memory to prevent data loss, etc.
* A DBMS includes functions to perform those actions with safety.

*We are talking about the DB side of the CRUD, not the interface one!*

##### Classification

###### Relational Databases

* What:
	* Basically a table with rows and columns.
	
* Examples:
	* MySQL
	* Postgres

* Choose when:
	* Data is uniform and normal (no redundancies and no empty fields).
	* Aggregation is important.
	* You need to retrieve and aggregate the data in multiple ways.
	* When your data model is unlikely to change.
	* The data is small enough that you don't have to manage it over clusters.

* Data Modeling/Schema:
	* Show tables, metadata, and links.
	* Specify type and constraints ("2 characters," "MM/DD/YYYY date").

###### NoSQL Databases (Non Relational Databases)

* What:
	* A list of *records*.
	* Each record has a set of properties, pretty much like a JavaScript object.

* Examples:
	* MongoDB
	* Parse

* When to use:
	* Key/value pairs are a logical model for your structure.
	* Data is not uniform or normal.
	* Aggregation is not important.
	* You need flexibility for the data model to evolve.
	* Impedance mismatch (computational processing required to convert from objects to tables to objects again) is an issue.
	* You have so much data that is need to be handled in clusters.

* Data Modeling/Schema:
	* Show the record and its properties.
	* JSON "pretty" formatting.
	* Specify type and constraints ("2 characters," "MM/DD/YYYY date").

#### Cloud Databases

* Why cloud databases? Here are some problems with non-cloud DBs:
	* Databases include the DBMS, so you have to install software to run them. MongoDB is not simply a file format!
	* Your server needs to allow it — that means buying a service, not simply storage. We will talk about Amazon Web Services later in the course.
	* There is the burden of backing up and managing copies of your data.
	* As with any cloud-based service, your data might be more secure online.
	
*Disclaimer: of course this is all based on prototype purposes!*

---

### Working Session: Parse Database

* Products from Parse
* Web interface demo (italics for MongoDB syntax)
	* Logging into Parse
	* App (*database*)
	* Class (*collection*)
	* Row (*document*/record/object)
	* Column, data types

* JavaScript API
	* [Documentation](https://www.parse.com/docs/js/guide)
	* Parse Template
		* Download [blank project](https://www.parse.com/downloads/javascript/parse-js-blank/latest)
		* Insert the API Keys
	* Parse CRUD
		* Initialize Class
		* Create
		* Read
		* Query
		* Update
		* Delete
	
### Extra

* Callback functions
* [Parse JavaScript Libraries](https://parse.com/docs/api_libraries)
* [MongoDB](https://www.mongodb.org/)

---

### Recommended Readings and Sources

* Technical
	* [Database](https://en.wikipedia.org/wiki/Database)
	* [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
	* [Understand JavaScript Callback Functions and Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
	
* Critical
	* [Consider the Boolean](https://source.opennews.org/en-US/learning/consider-boolean/)
	* [Database as a Symbolic Form](http://danm.ucsc.edu/~morse/136C/readings/manovich_database.pdf), *Lev Manovich*
	* [The Database as System and Cultural Form: Anatomies of Cultural Narratives](http://www.gravitytrap.com/classes/readings/paul_christiane-final.pdf), *Christiane Paul*

A full list of resources can be found [here](https://docs.google.com/spreadsheets/d/1Of_llTTAOZ_o8CGmiXSZnMmZBthQvxQiC34YWId9IJs/edit?usp=sharing).


### Required Tools

* Create a [Parse](https://www.parse.com) account prior to the class.