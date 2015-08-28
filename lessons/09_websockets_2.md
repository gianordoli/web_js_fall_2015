## Lesson 8: WebSockets 1

These two lessons will focus on fast client-server communication using WebSockets. We will discuss when to use WebSockets (versus AJAX) and the many applications of it.  
In the working session we will build a simple chat application using the Socket.io library.

---

### Lecture

#### Websockets

* Basically a way to send "messages" (data) back and forth between client and server.
* It establishes a persistent client-server connection, where both are constantly "listening" to each other.
* [AJAX vs Websockets](http://stackoverflow.com/questions/10377384/why-use-ajax-when-websockets-is-available)
* You'll use it when your app needs low-latency ("realtime") communication.
* [Cases](http://www.infoworld.com/article/2609720/application-development/9-killer-uses-for-websockets.html):
	* your users communicate with each other
		* chats
		* online editing tools
		* multiplayer games
	* your website is constantly changing based on the user interaction
		* social media feeds
		* location-based apps
		* online education websites
* WebSockets examples
	* [Pelada](http://gianordoli.com/projects.html#esib0unZub)
	* [PolyPollock](http://apon.io/)
* WebSockets libraries
	* [Socket.io](http://socket.io/)
		* [Polyfill](https://remysharp.com/2010/10/08/what-is-a-polyfill)

### Working Session: Simple Chat

* Application Diagram
* Front-end
* Adding the socket.io library
* Underscore template
* Messaging
	* Events
	* Socket connection
		* front-end
		* server (everything happens inside the on('connection') scope)
	* socket.emit
		* Any data type (String, number, {}, ...)

* Registering users
	* users = []
	* disconnect
	* user name

	
### Extra

* [Can I use...?](http://caniuse.com/)