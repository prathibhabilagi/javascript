# HTML

## 1. Types of elements in HTML
	=> Structural Elements : Organise page content to give the documents more structure.
	    <a>, <p>, <body>, <div>, <head>, <html>, <h1> to <h6>, <article>, <aside>, <header>, <footer>, <nav>, <section>, <span>, <hr>, <br>

	=> Metadata Elements : Used to give additional  information  about a document.
	    <base>, <link>, <style>, <title>, <meta>

	=> Form Elements : Used to collect data from the user.
	    <button>, <form>, <input>, <textarea>, <select>, <option>, <optgroup>, <label>, <fieldset>

	=> Formatting Elements : Used to design and display special types of text.
	    <b>, <strong>, <i>, <em>, <mark>, <small>, <del>, <ins>, <sub>, <sup>

	=> List Elements : Used to group a set of related items in lists.
        <ul>, <ol>, <li>, <dl>, <dt>, <dd>

	=> Table Elements : It's a container where other elements  can be declared.
	    <tr>, <th>, <td>, <caption>, <colgroup>, <thead>, <tfoot>, <tbody>

	=> Scripting  Elements : Used to embed a client-side script.
	    <script>

	=> Embedded Content Elements : Used for embedding external application which generally multimedia content like audio or video into an HTML document.
	    <embed attributes>

## 2. What are semantic Elements - Significance
	=> Semantic HTML Elements are those that clearly describe their meaning in a human- and machine-readable way. 
    Significance : 
	    -> Clearer code and easier to maintain
	    -> Help your site be accessible
    Semantic Elements in HTML :
	    <article>, <aside>,<details>, <figcaption>, <figure>, <footer>, <header>, <main>, <mark>, <nav>, <section>, <summary>, <time>

## 3. Why <!DOCTYPE html>? What happens if you don't include?
	=> The DOCTYPE tell the browser what version of HTML is written. If we don't include DOCTYPE it will pose threat to browser compatibility and the use of older versions of HTML. The browser will not support the use of certain new features and tags that come with latest versions of the mark up languages.

## 4.  How web page loaded. Architecture of flow?
	=> When you type www.ibighit.com in the browser.
		1. Browser checks the cache for a DNS record to find the corresponding IP address for www.ibighit.com
			-> Checks in 4 cache: Browser cache, OS cache, Router cache and ISP cache.
		2. If requested url is not in the cache, ISP's DNS server initiates a DNS query to find the IP address of the server that hosts www.ibighit.com.
		3. It grab the correct IP address, and browser initiates a TCP connection with the server. Then a TCP connection is established for data transmission.
		4. The browser sends an HTTP request to the webserver.
		5. The server handles the request and sends back a response.
		6. Then the browser displays the HTML content. 

## 5. Difference between local storage and cookies.
	Cookies :
		-> It holds the data specific to client and website.
		-> It can be accessed either by the web server or the client computer.
		-> The expiration depends on the expiration duration and can be set from server-side and client-side.	

	Local Storage :
		-> It store data on client’s computer.
		-> It allows the saving of key/value pairs in a web browser.
		-> The data stored has no expiration date but can be cleared by deleting the Browser Cache.

## 6. Name the headers in an http request.
	=> This type of headers contains information about the fetched request by the client.
		-> Connection: Controls whether the network connection stays open after the current transaction finishes.
		-> Keep-Alive: Controls how long a persistent connection should stay open.
		-> Proxy-Authenticate: It gives access to a resource file by defining an authorization.
		-> Proxy-Authorization: It contains the credentials to authenticate between the user agent and the user-specified server.
		-> TE: Specifies the transfer encodings the user agent is willing to accept.
		-> Trailer: Allows the sender to include additional fields at the end of chunked message.
		-> Transfer-Encoding: Specifies the form of encoding used to safely transfer the entity to the user.

## 7. Geolocation  API.
	-> It is a communication interface between a client and server.
	-> It is used to get the geographical position of a user.

## 8. How to specify headers in a HTML page.
	=> <h1> to <h6> tags are used to define HTML headings.
		-> <h1> defines the most important heading.
		-> <h6> defines the least important heading.


# CSS

## 1. Specificity: 
	<div calss="section">
		<p class="para dark" id="test">It should be dark</p>
	</div>
	.section .para{color: red}
	-> #test {color: green}
	=> If the same rule is written twice into the external style sheet, then lower rule is used to style the element. Then later rule was applied that the ID selectors have a higher specificity than attribute selectors.  
	Thus, The green is applied to the <p> element.

## 2. Positioning properties.
	=> It specifies the type of positioning method used for an element.
	Position values:
		-> static: Elements are positioned static by default.
		-> relative: Elements are positioned relative to its normal position.
		-> fixed: Elements always stays in the same place even if the page is scrolled.
		-> absolute: Elements are positioned relative to the nearest positioned ancestor
		-> sticky: Elements are positioned based on the user's scroll position.

## 3. Box-sizing: Content-Box and Border-Box.
	=> Box-sizing defines how the width and height gets applied on an element.
	2 possible values:
		-> content-box: The width & height of the element only include the content. The border, padding and margin aren’t part of the width or height.
		-> border-box:  The padding and border are included in the width and height.

## 4. Display and visibility.
	=> Display:
		-> It specifies how an element is displayed.
		-> It has default display value (block or inline) depending on what type of element.
		-> The dispaly value none hides or remove elements completely.	
	=> Visibility: 
		-> It specifies whether or not an element is visible.
		-> The default value is visible. The element is visible.
		-> The hidden value hides all the elements

## 5. Display: inline, block, inline-block.
	=> Display property specifies the display behavior of an element.
		-> inline: Display elements as an inline element. Any height and width properties will have no effect.
		-> block: Display elements as a block element. It starts on a new line and takes whole width.
		-> inline-block: Display element as an inline-level block container. It allows to set width and height on the element.

## 6. Media queries - write only standard numbers for phone, tablet and desktop.
	=>	Phone:
			@media (min-width:320px) and (min-width:480px)   { 
				/* Device = smartphones, portrait iPhone, Android phones, landscape iPhone */ 
			}
	=> Tablet:
		@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
			/* Device = Low Resolution Tablets, Mobiles (Landscape), Ipads */
		}
	=> Desktop: 
		@media (min-width: 1281px) {
			/* Device = Laptops, Desktops */
		}

# Java Script

## 1. Explain the difference between var, let and const in only one example.
	=> var 
		-> Globally scoped or functinal scoped.
		-> It can be upadated or declared within its scope.
		-> Initalized with undefined in hoisting.
		-> Declared without being intialized.
	
	=> let
		-> Block Scoped.
		-> It can be updated but not re-declared.
		-> It can't be initalized.
		-> It can be declared without initalized.
	
	=> const 
		-> Block Scoped.
		-> It can't be updated or re-declared.
		-> It can't be initialized.
		-> It can be initalized during declaration.

## 2. Show any two ways of creating an Object?
	=> Using object literals:
		Literals are smaller and simpler ways to define objects.
		Ex: let kpop = {
				name: 'BTS',
				company: 'Big Hit',
				members: 7
			};
			console.log(kpop.name); //BTS
			console.log(kpop['company']); //Big Hit
	
	=> Using es6 classes:
		Object can be created out of class in js.
		Ex: class Vehicle {
				constructor (name, maker, engine) {
					this.name = name;
					this.maker = maker;
					this.engine = engine;
				}
			}
			let car = new Vehicle ('GT', 'BMW', '1998cc');
			console.log(car.name); //GT

## 3. What is closure? Write a program to achieve -> add(2)(3); should output //5.
	=> Closure is a feature in javascript where inner function has access to outer function's variables. The inner function can access its parent/ancestors scope even though parent function has done executing.

	-> Program: (closure.js)
		var add = function(x) {
			return function(y) { 
				return console.log(x + y);
			};
		}
		add(2)(3); //5

## 4. Significance of Arrow Functions in ES6.
	-> Provides concise way to write functions in javascript.
	-> The context inside arrow functions is statically defined. It means the value of this inside arrow functions is not dependent on how they are invoked or how they are defined.

	Syntax: (param1, param2) => expression

## 5. What are the return types of:
	=> map(): Used to iterate over an array and calling function on every element of array.
		return -> returns a new array
	=> filter(): Used to create an array filled with all array elements that pass a test 
		return -> returns a new array
	=> find(): Used to get the value of the first element in the array that satisfies the provided condition.
		return -> returns the array element value
	=> forEach(): It calls a function once for each element in an array, in order.
		return -> returns newly created array
	=> reduce(): Used to reduce the array to a single value and executes a provided function for each value of the array.
		return -> return value of the function is stored in an accumulator/result
	=> some(): Checks whether at least one of the elements of the array satisfies the condition checked by the argument method.
		return -> returns true even if one of the elements of the array satisfies the condition else false.
	=> every(): Checks whether all the elements of the array satisfy the given condition or not that is provided by a method passed to it as the argument. 
		return -> returns Boolean value true if all the elements of the array satsfies the condition.

## 6. Shallow Copy and Deep Copy?
	=> Shallow Copy:
		-> It stores the references of objects to the original memory address.   
		-> Reflects changes made to the new/copied object in the original object.
		-> Faster.
	=> Deep Copy:
		-> It stores copies of the object’s value.
		-> Doesn’t reflect changes made to the new/copied object in the original object.
		-> Comparatively slower.

## 7. Difference between functions and function expressions.
	=> Functions:
		-> Defines a named function variable without requiring variable assignment.
		-> Function name is visible within it's scope and the scope of it's parent.
			Ex: function bar() {
					return 3;
				}
			It must be invoked using function name. Ex: bar();
		-> Load before any code is executed.
	=> Function Expression:
		-> Defines a function as a part of a larger expression syntax.
		-> It can be stored in a variable, the variable can be used as a function.
			var x = function (a, b) {return a*b};
		-> Loads only when the interpreter reaches that line of code.

## 8. Name some Asynchronous calls.
	=> Callback Functions:
		-> When a function simply accepts another function as an argument, this contained function is known as a callback function. 
			ex: setInterval(function() {
				console.log('Hello');
				}, 1000);

	=> Promises: 
		-> A promise is used to handle the asynchronous result of an operation. It does not wait for an asynchrnous block of code to completely execute before synchronous parts of the code can run.
			Ex: const promise = new Promise(function(resolve, reject) {
					// promise description
				})

	=> Async and Await:
		-> Async function is a modification to the syntax used in writing promises. It only makes writing promises easier. It returns a promise.
		-> Await is only used with an async function. It ensure that all promises returned in the async function are synchronized.
			Ex: (async () => {
					await fnName();
				}) ();

## 9. What are higher order functions? Give an example.
	=> Higher-Order function is a function that receives a function as an argument or returns the function as output.
	Ex: Program (higherOrderFunction.js)
	
## 10. How do you make an asynchronous call in javasript?
	=> Js is single-threaded and synchronous language. Code is executed in order one at a time. 
	 Program : (asyncCall.js)


						




