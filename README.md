Hello, #space!
=========

This is a simple project illustrating Grunt setup for a sample #space project.
It contains configuration of Grunt tasks for:
* compiling #space templates:
    * `grunt` - one-time compilation
    * `grunt watch` - continuous compilation on each file change
* running a simple HTTP server: `grunt connect`

== Install

Clone this repository and then run:
* `npm install grunt-cli -g`
* `npm install`

== Play

Open 2 terminal windows with the following commands:

* `grunt watch` - this will enable automatic re-compilation every time you change one of hsp files
* `grunt connect` - this will start a build-in HTTP server and open your browser to point to http://localhost:8000/
