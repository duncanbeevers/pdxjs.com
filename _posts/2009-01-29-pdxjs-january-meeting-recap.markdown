---
layout: post
title: PDXjs January Meeting Recap
excerpt: |
  The inaugural meeting of the Portland JavaScript Admirers was a big
  success. We started off the evening with a round of introductions.
  
  <object width="400" height="302"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=3170513&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=3170513&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="400" height="302"></embed></object>
  
  After that we listened to several talks on the fine language that is
  JavaScript. I pulled out my copy of JavaScript: The Good Parts by
  Douglas Crockford and went over some of the tips from the book on how
  to write great JavaScript code. I focused on how and why to avoid
  global variables - which can sneak up on your JavaScript code if you
  are not careful. 
---

The inaugural meeting of the Portland JavaScript Admirers was a big
success. We started off the evening with a round of introductions.

<object width="400" height="302"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=3170513&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=3170513&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="400" height="302"></embed></object>

After that we listened to several talks on the fine language that is
JavaScript. I pulled out my copy of JavaScript: The Good Parts by
Douglas Crockford and went over some of the tips from the book on how
to write great JavaScript code. I focused on how and why to avoid
global variables - which can sneak up on your JavaScript code if you
are not careful. 
        
For example, you may know that variable declaration in
JavaScript is optional. But did you know that variables that are not
declared become global?

Another tricky case is the `this` keyword, which is used in method
definitions to access attributes of the object that the method is
attached to. But `this` is actually re-assigned every time the method
is invoked. So if the method is invoked as a function instead of as a
method, i.e.

    var f = object.method; f();

instead of

    object.method();

then `this` is assigned to the global object for the execution of `f`.
So any attributes set on `this` then become global variables, and any
attributes read from `this` are read from the global namespace instead
of from `object`.

The code examples that I am pointing at in the video are online at
<http://gist.github.com/64478>.

<object width="400" height="302"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=3139648&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=3139648&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="400" height="302"></embed></object>

Scott Becker told us all about the features of [SproutCore][], which is an MVC
framework for browser-side applications. Among other things, SproutCore allows
you to set up models for your data, which can act as an intermediary to
transfer data to and from a server, or that can store data locally using
something like Google Gears. Changes made in the model data automatically
update data in your views, and vice versa, through the use of Key-Value Coding.
Instead of directly accessing attribute values, you use `object.get(key)` and
`object.set(key, value)`. This allows SproutCore to do all kinds of magical
stuff for you.

[SproutCore]: http://www.sproutcore.com/"

Views in SproutCore are things like forms and form elements, buttons, file
selectors, and content areas. Instead of using the browser's form elements and
buttons, SproutCore renders these as images to achieve a very slick-looking
interface that is consistent across all browsers.

Using Key-Value Coding with views, you can do stuff like get input from your
user via a form, and display a live preview of the content he enters that is
updated in real time, with very little work on your part.

Unfortunately the batteries in our camera died partway through Scott's talk. So
there are a few minutes missing from the middle.

The slides from Scott's talk are online at
<http://www.slideshare.net/joydivider/sproutcore-a-next-gen-javascript-framework>.

<object width="400" height="302"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=3188440&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=3188440&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="400" height="302"></embed></object>

I went over the new features in [jQuery 1.3][].  Many speed improvements have
been made in this release. For example, the selector engine is 49% faster. And
HTML injection into the document is a blazing 6 times faster. The new, faster
selector engine has been broken out into its own project called [Sizzle][].

[jQuery 1.3]: http://docs.jquery.com/Release:jQuery_1.3
[Sizzle]: http://sizzlejs.com/

This release also includes a complete rewrite of the event system. In addition
to the `bind` method for binding event handlers, jQuery 1.3 supports the most
excellent `live` method. Using `live`, your event handler will be bound to all
elements on the page that match a given selector, and any elements that appear
in the future that match the same selector.

jQuery events are now a self-contained system layered on top of native events.
And the whole thing is compliant with W3C protocols for event handling.

I also gave an introduction to jQuery in general for those who are not familiar
with it. And we had a lively group discussion on why people might prefer jQuery
over alternative libraries, like Prototype.

<object width="400" height="302"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=3197144&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=3197144&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="400" height="302"></embed></object>

Finally, J. Chris Anderson graciously jumped in to give us an introduction to
[CouchDB][], a document-oriented database. CouchDB stores all of its data as
JSON.  There is no schema, and there are no tables. Queries are performed using
the MapReduce pattern and can be written as stored JavaScript procedures.

[CouchDB]: http://couchdb.apache.org/

Because it is schema-less, CouchDB is not a great choice when you need a lot of
relational features, like joins. But in cases where you have been frustrated by
SQL, CouchDB can be a great choice. It excels at serving up very large datasets
with a high number of concurrent queries.

J. Chris is a CouchDB developer, and is one of the authors of CouchDB: Rough
Cuts Version. We will hopefully be seeing another talk from him on using
CouchDB to create pure-JavaScript applications.

<object width="400" height="302"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=3197436&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=3197436&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="400" height="302"></embed></object>

At the end of the evening we retired to the Green Dragon for drinks. (Video
suppressed.)

If you are having any trouble with audio syncing in the flash player, I suggest
downloading the MP4s directly. Click on the title in any of the videos to go to
its page on Vimeo. There you can find the file download link in the lower-right
area.
