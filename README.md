Hello, #space!
=========

This is a simple project illustrating Grunt setup for a sample #space project.

## Install

Clone this repository and then run:
* `npm install grunt-cli -g`
* `npm install`

## Play

To start exploring #space in an easy to setup playground just type:
* `grunt play`

This will execute several steps:
* initial setup of the project (compilation, coping etc.)
* start a built-in WWW server
* open your favourite web browser and point it to the root of a freshly started server (http://localhost:8000)
* watch for all the file changes and compile / copy files as soon as those are changed

## There is more

This project contains configuration of several Grunt tasks for:
* compiling #space templates:
    * `grunt` - one-time compilation
    * `grunt watch` - continuous compilation on each file change
* running a simple HTTP server: `grunt connect:server:keepalive`

Those tasks can be used individually or you can simply run `grunt play` for the default workflow.
