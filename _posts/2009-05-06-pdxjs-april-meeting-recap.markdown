---
layout: post
title: PDXjs April Meeting Recap
excerpt: |
  This month we heard talks about several new JavaScript features and techniques.
  Duncan Beevers started off with a talk titled JavaScript Packaging Strategies.
  He recommends using [Sprockets][] to combine JavaScript files with smart
  dependency handling. And he says that [YUI Compressor][] is a good way to
  reduce the file size of the resulting package. Though for best results you
  will want to combine YUI Compressor with [gzip][].
  
  [Sprockets]: http://getsprockets.org/
  [YUI Compressor]: http://developer.yahoo.com/yui/compressor/
  [gzip]: http://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/
  
  <object width="640" height="360"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=4518486&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=4518486&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="640" height="360"></embed></object>
---

This month we heard talks about several new JavaScript features and techniques.
Duncan Beevers started off with a talk titled JavaScript Packaging Strategies.
He recommends using [Sprockets][] to combine JavaScript files with smart
dependency handling. And he says that [YUI Compressor][] is a good way to
reduce the file size of the resulting package. Though for best results you will
want to combine YUI Compressor with [gzip][].

[Sprockets]: http://getsprockets.org/
[YUI Compressor]: http://developer.yahoo.com/yui/compressor/
[gzip]: http://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/

<object width="640" height="360"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=4518486&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=4518486&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="640" height="360"></embed></object>

The slides from Duncan's talk are available at
<http://docs.google.com/Presentation?id=d9nrbm4_80kvp92m5b> and the code from
his demo is available at
<http://github.com/duncanbeevers/packaging_javascript_demo/>.

Duncan has [a fork of Sprockets][] and
[a Rails plugin for packaging JavaScript files][] on Github.

[a fork of Sprockets]: http://github.com/duncanbeevers/sprockets/
[a Rails plugin for packaging JavaScript files]: http://github.com/duncanbeevers/asset_packager/

Next up, Paul Point Pen demonstrated the many features of [video][] and
[audio][] elements in [HTML 5][]. The native JavaScript API for these elements
allows for tremendous control over playback and playback events. For example,
you can execute a callback function whenever the user moves the video progress
slider. It is also possible to feed video into a [canvas][] and manipulate the
results pixel-by-pixel in real time for effects like 
[live green-screening][] [in a browser][].

[video]: http://www.w3schools.com/tags/html5_video.asp
[audio]: http://www.w3schools.com/tags/html5_audio.asp
[HTML 5]: http://en.wikipedia.org/wiki/HTML_5
[canvas]: https://developer.mozilla.org/en/Canvas_tutorial
[live green-screening]: http://blog.mozbox.org/post/2009/04/12/Firefox-35:-a-new-experiment-with-Canvas-Video
[in a browser]: https://developer.mozilla.org/samples/video/chroma-key/index.xhtml

<object width="640" height="360"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=4439283&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=4439283&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="640" height="360"></embed></object>

The slides from Paul's talk are available online at
<http://html5.waytoocrowded.com/>.

Video elements also integrate well with CSS 3 transforms, as you can see in
this [demo of a circular video element][].

[demo of a circular video element]: http://people.mozilla.com/~prouget/demos/round/index.xhtml

HTML 5 is still a work in progress. So browser support for video and audio
elements is pretty inconsistent at this point. For example, different browsers
do not support all of the same video and audio codects.

Unfortunately the batteries in our camera died part-way through Paul's talk. So
we do not have the very end recorded. I am sorry about that Paul. We will try
to do better next time.

Leif Warner demonstrated [E4X][], which is a nifty new feature in
[JavaScript 1.6][]. XML elements can now be expressed as primitives in
JavaScript, giving them the same status as strings and arrays. E4X also
provides some very handy methods for navigating XML data structures using
JavaScript syntax.

[E4X]: https://developer.mozilla.org/en/e4x
[JavaScript 1.6]: https://developer.mozilla.org/en/New_in_JavaScript_1.6

<object width="640" height="360"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=4406971&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=4406971&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="640" height="360"></embed></object>

Most E4X implementations do not have a way to inject XML objects into the DOM,
or to access DOM elements as E4X objects. So to interact with a web page using
E4X you need to read in DOM elements as strings and convert them to E4X objects
using the XML constructor:

    domEl  = document.getElementById('main');
    e4xObj = new XML(domEl.innerHTML);

And convert XML structures into strings before inserting them into the DOM:

    domEl.innerHTML = e4xObj.toString();

Finally, I talked about one of my favorite JavaScript libraries,
[Functional JavaScript][]. JavaScript has all of the necessary features to make
it a good language for functional programming - the most important feature
being [first-class functions][]. Functional JavaScript provides all of the
functions you need to actually write functional programs comfortably. A lot of
functions are included, but some of the highlights are `map`, `reduce`,
`curry`, and `uncurry`.

[Functional JavaScript]: http://osteele.com/sources/javascript/functional/
[first-class functions]: http://en.wikipedia.org/wiki/First_Class_Functions

Another feature that is included is the string lambda. Writing anonymous
lambdas in JavaScript can get kind of ugly due to the verbosity of writing
`function(x,y) { return ...; }` over and over again. String lambdas are meant to
address this issue by creating a mini syntax just for writing small functions.
You can write an adding function like this:

    'x+y'.lambda();

You can get even more terse by leaving out arguments. The `lambda` method will
assume that operators left out of a binary expression should be filled in with
variables. So an add-one function could look like this:

    '+1'.lambda();

If you want to do something trickier, you can always explicitly declare the
arguments of the function. For example, here is how you could write a string
lambda that accepts arguments in a different order than the order in which they
appear in the function body:

    'x,y -> y / x'.lambda();

All of the functions in Functional JavaScript implicitly call the `lambda`
method on any arguments that are expected to be functions. So most of the time
you can express functions as bare strings:

    map('*2', [1,2,3,4]);

Check out the [Functional JavaScript documentation][] for more about what
string lambdas can do.

[Functional JavaScript documentation]: http://osteele.com/sources/javascript/functional/

I have [a fork of Functional JavaScript][] on Github with compatibility fixes for
running in a standalone interpreter, such as the Spidermonkey shell. Here is
how you can get Functional JavaScript going in a standalone shell:

    $ js
    js> load('to-function.js');
    js> load('functional.js');
    js> Functional.install();
    
[a fork of Functional JavaScript]: http://github.com/hallettj/functional-javascript/

I would like to thank Scott Becker for providing a video camera for us to use.
It is a very nice camera, and I think the video quality came out great. Thanks
to Scott all of the videos from this meeting are available in 720p HD.

I look forward to seeing everybody again at the [May meeting][]!

[May meeting]: http://calagator.org/events/1250457163
