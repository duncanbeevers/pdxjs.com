---
layout: post
title: PDXjs March Meeting Recap
excerpt: |
  We started of the March meeting of the Portland JavaScript Admirers with a
  demonstration of [ReverseHttp][].  This is a protocol that allows any HTTP
  client to act as an HTTP server by receiving requests on a public-facing
  subdomain. So it allows for [a web server written in JavaScript to run in a normal web page][].
  
  [ReverseHttp]: http://reversehttp.net/
  [a web server written in JavaScript to run in a normal web page]: http://www.reversehttp.net/demos/demo.html
  
  A useful application of a web server in a page is that provides a flexible way
  to push data into a client side application. The client does not have to be
  specially set up for polling; and the program pushing the data does not have to
  be specially configured to support [long-polling connections][].
  
  [long-polling connections]: http://en.wikipedia.org/wiki/Long_polling#Long_polling
---

We started of the March meeting of the Portland JavaScript Admirers with a
demonstration of [ReverseHttp][].  This is a protocol that allows any HTTP
client to act as an HTTP server by receiving requests on a public-facing
subdomain. So it allows for [a web server written in JavaScript to run in a normal web page][].

[ReverseHttp]: http://reversehttp.net/
[a web server written in JavaScript to run in a normal web page]: http://www.reversehttp.net/demos/demo.html

A useful application of a web server in a page is that provides a flexible way
to push data into a client side application. The client does not have to be
specially set up for polling; and the program pushing the data does not have to
be specially configured to support [long-polling connections][].

[long-polling connections]: http://en.wikipedia.org/wiki/Long_polling#Long_polling

ReverseHttp works through a gateway server. The client code, referred to in a
ReverseHttp documentation as the 'application', requests some URL space from
the server. The URL space can be a path with a unique root, so that multiple
applications can register URL space on the same host, or the URL space can be a
unique subdomain.

The application next makes a long-polling request to the gateway server on a
private URL. The server listens on the applications registered URL space and
proxies an requests that come in to the application by embedding the request
within the response to the application's long-polling request. The application
composes a response which it sends back to the gateway server embedded in
another HTTP request. The gateway server finally extracts the application's
response and forwards it on to the original requestor.

So long-polling is used internally by ReverseHttp. But ReverseHttp has
advantages over other solutions that do not require a third-party gateway. It
can be used in many different applications to send or receive different kinds
of data without any modification to the gateway server. And the data source
does not have to be specially outfitted to support long-pulling connections. So
you can catch data from a source that was not originally designed to push data
to a client-side application.

I set up two demos to show off what ReverseHttp can do. One displays commit
notifications from a Github repository in real time. The other is a chat
application - a sort of a really stripped down reimplementation of Jabber. The
demos are available at <http://pdxjs.com:8000/>.

Next we heard about Windows Script Host from Rainier Anacker. This is a feature
of Windows that allows users to write scripts to automate functions of the
operating system. By default scripts can be written in JScript or VBScript -
but there are addons that allow scripts to be written in other languages.

When using JScript, operating system features are accessed through calls to the
WScript.shell object. The API allows scripts to manipulate running programs,
and to send keypresses and control sequences. For example, a script can open
Notepad and enter "Hello world" into a new text file.

Rainier demonstrated how Script Host can be used to grab all of the links from
a web page and to display them with indexes in a new document. He mentioned
that he has also used Script Host to manipulate Excel documents, thus saving a
lot of manual work. It was brought up that Script Host is a good tool for
automated testing when developing applications on Windows.

For a good reference on how to use Script Host, see Windows 2000 Scripting
Bible.

After that we talked a little about ways to get around [JavaScript's same-origin policy for HTTP requests][].
If you have control over the browsers that will be hosting your application,
you can set up a direct socket to a server and expose an interface to that
connection to the JavaScript interpreter. Otherwise your options are more
limited. You can use workarounds like [JSONP][] and [HttpCssRequest][] - but
those only allow GET requests and require server-side cooperation. You can use
[a server-side proxy][] to direct requests through. But you have to set up that
proxy on your own domain.

[JavaScript's same-origin policy for HTTP requests]: http://en.wikipedia.org/wiki/Same_origin_policy
[JSONP]: http://bob.pythonmac.org/archives/2005/12/05/remote-json-jsonp/
[HttpCssRequest]: http://nb.io/hacks/csshttprequest
[a server-side proxy]: http://developer.yahoo.com/javascript/howto-proxy.html

Hopefully though the troubles caused by the same origin policy are temporary.
Firefox 3.1 - soon to be renumbered Firefox 3.5 - includes [cross-domain
XMLHttpRequest support][].  And Internet Explorer 8 also allows cross-domain
requests via [a new API object called XDomainRequest][XDomainRequest].  The new
features in both browsers require servers to include an
`Access-Control-Allow-Origin` HTTP header in certain responses to indicate that
they accept cross-domain connections - as described in [this W3C working draft][].
Hopefully similar features will appear in other browsers in the near future.

[cross-domain XMLHttpRequest support]: https://developer.mozilla.org/En/HTTP_access_control
[XDomainRequest]: http://msdn.microsoft.com/en-us/library/cc288060%28VS.85%29.aspx
[this W3C working draft]: http://dev.w3.org/2006/waf/access-control/

Finally we spent some time talking about neat things that can be done with HTML
5 and newer versions of the DOM API. We looked at [Chrome Experiments][], which
is a Google-sponsored repository of JavaScript demos that push the limits of
what JavaScript can do. We also looked at [Raphaël][], which Merlyn brought up
as a cross-browser-compatible tool for rendering vector graphics. And we
drooled a little over [querySelector and querySelectorAll][].  querySelector
and querySelectorAll These are new methods that are being added to the DOM API.
They add jQuery-like selectors to the native API. For example,

[Chrome Experiments]: http://www.chromeexperiments.com/
[Raphaël]: http://raphaeljs.com/
[querySelector and querySelectorAll]: http://helephant.com/2008/07/the-bleeding-edge-of-web-queryselector-and-queryselectorall/

    document.querySelectorAll("#large:nth-child(even)");

querySelector and querySelectorAll are already included in Safari 4, Firefox
3.1/3.5, IE8, and Opera's Acid 3 build.

All in all it was a fun meeting. I am already looking forward to the next one!
