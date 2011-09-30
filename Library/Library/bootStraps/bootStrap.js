var douglas, steve, nicholas;


if (ds.Book.length === 0 || ds.Author.length ===0) { 
    douglas = new ds.Author({name: "Douglas Crockford"});
    douglas.save();

    steve = new ds.Author({name: "Steve Krug"});
    steve.save();

    nicholas = new ds.Author({name: "Nicholas C. Zakas"});
    nicholas.save();

	[
	    {
	        isbn: '978-3-980-94505-9',
	        title: 'Professional JavaScript for Web Developers',
	        author: nicholas,
	        editionDate: new Date(2009, 0, 14), 
	        description: "This eagerly anticipated update to the breakout book on JavaScript offers you an in-depth look at the numerous advances to the techniques and technology of the JavaScript language. You'll see why JavaScript's popularity continues to grow while you delve through topics such as debugging tools in Microsoft Visual Studio, FireBug, and Drosera; client-side data storage with cookies, DOM storage, and client-side databases; HTML 5, ECMAScript 3.1, the Selectors API; and design patterns including creational, structural, and behavorial patterns. "
	    },
	    {
	        isbn: '978-0-596-80279-0',
	        title: 'High Performance JavaScript',
	        author: nicholas,
	        editionDate: new Date(2010, 2, 23), 
	        description: "If you're like most developers, you rely heavily on JavaScript to build interactive and quick-responding web applications. The problem is that all of those lines of JavaScript code can slow down your apps. This book reveals techniques and strategies to help you eliminate performance bottlenecks during development. You'll learn how to improve execution time, downloading, interaction with the DOM, page life cycle, and more.\n Yahoo! frontend engineer Nicholas C. Zakas and five other JavaScript experts -- Ross Harmes, Julien Lecomte, Steven Levithan, Stoyan Stefanov, and Matt Sweeney -- demonstrate optimal ways to load code onto a page, and offer programming tips to help your JavaScript run as efficiently and quickly as possible. You'll learn the best practices to build and deploy your files to a production environment, and tools that can help you find problems once your site goes live."
	    },
	    {
	        isbn: '978-0-470-10949-6',
	        title: 'Professional Ajax, 2nd Edition',
	        author: nicholas,
	        editionDate: new Date(2007, 2, 12), 
	        description: "Professional Ajax 2nd Edition provides a developer-level tutorial of Ajax techniques, patterns, and use cases. The book begins by exploring the roots of Ajax, covering how the evolution of the web and new technologies directly led to the development of Ajax techniques. A detailed discussion of how frames, JavaScript, cookies, XML, and XMLHttp requests (XHR) related to Ajax is included. After this introduction, the book moves on to cover the implementation of specific Ajax techniques. Request brokers such as hidden frames, dynamic iframes, and XHR are compared and contrasted, explaining when one method should be used over another. To make this discussion clearer, a brief overview of HTTP requests and responses is included.\n Once a basic understanding of the various request types is discussed, the book moves on to provide in-depth examples of how and when to use Ajax in a web site or web application. Different data transmission formats, including plain text, HTML, XML, and JSON are discussed for their advantages and disadvantages. Also included is a discussion on web services and how they may be used to perform Ajax techniques. Next, more complex topics are covered. A chapter introducing a request management framework explores how to manage all of the requests inside of an Ajax application. Ajax debugging techniques are also discussed.\n\n The last part of the book walks through the creation of two full-fledged Ajax web applications. The first, FooReader.NET, is an Ajax-powered RSS reader. The second, called AjaxMail, is an Ajax-enabled email system. Both of these applications incorporate many of the techniques discussed throughout the book.\n\n Professional Ajax 2nd edition is written for Web application developers looking to enhance the usability of their web sites and web applications and intermediate JavaScript developers looking to further understand the language. Readers should have familiarity with XML, XSLT, Web Services, PHP or C#, HTML, CSS. This book is not aimed at beginners without a basic understanding of the aforementioned technologies. Also, a good understanding of JavaScript is vitally important to understanding this book. Those readers without such knowledge should instead refer to books such as Beginning JavaScript, Second Edition (Wrox, 2004, ISBN: 978-0-7645-5587-9) and Professional JavaScript for Web Developers (Wrox, 2005, ISBN: 978-0-7645-7908-0)."
	    },
	    {
	        isbn: '978-0-596-51774-8',
	        title: 'JavaScript: The Good Parts',
	        author: douglas,
	        editionDate: new Date(2008, 11, 1), 
	        description: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable than the language as a whole-a subset you can use to create truly extensible and efficient code."
	    },
	    {
	        isbn: '978-0-321-34475-5',
	        title: 'Don\'t Make Me Think: A Common Sense Approach to Web Usability, 2nd Edition',
	        author: steve,
	        editionDate: new Date(2005, 7, 28), 
	        description: "Five years and more than 100,000 copies after it was first published, it\'s hard to imagine anyone working in Web design who hasn\'t read Steve Krug\'s \"instant classic\" on Web usability, but people are still discovering it every day.  In this second edition, Steve adds three new chapters in the same style as the original: wry and entertaining, yet loaded with insights and practical advice for novice and veteran alike.  Don\'t be surprised if it completely changes the way you think about Web design."
	    },
	    {
	        isbn: '978-0-321-65729-9',
	        title: 'Rocket Surgery Made Easy',
	        author: steve,
	        editionDate: new Date(2009, 11, 18), 
	        description: "It's been known for years that usability testing can dramatically improve products. But with a typical price tag of $5,000 to $10,000 for a usability consultant to conduct each round of tests, it rarely happens.\n\n In this how-to companion to Don't Make Me Think: A Common Sense Approach to Web Usability, Steve Krug spells out an approach to usability testing that anyone can easily apply to their own web site, application, or other product. (As he said in Don't Make Me Think, \"It's not rocket surgery\".)\n\n By paring the process of testing and fixing products down to its essentials (A morning a month, that's all we ask ), Rocket Surgery makes it realistic for teams to test early and often, catching problems while it's still easy to fix them. Rocket Surgery Made Easy adds demonstration videos to the proven mix of clear writing, before-and-after examples, witty illustrations, and practical advice that made Don't Make Me Think so popular."
	    }
	].forEach(
	    function (book) {
	        new ds.Book(book).save();
	    }
	);
}

ds.Book.length;
