<img align="right" src="https://raw.githubusercontent.com/purplejs/purplejs/master/misc/logo.png">

SysInfo Example
===============

This example shows how to integrate with Java. Nashorn has a very extensive Java integration, but it will still be Java-objects. 
If you want to use the objects as native javascript-objects, then this example shows how it's done.

You can access the following path's to test in your browser:

* GET `/` - returns all system info as json.
* GET `/os` - returns the os part of system info as json.
* GET `/memory` - returns the memory part of system info as json.
* GET `/memory/heap` - returns the memory/heap part of system info as json.
* GET `/memory/nonHeap` - returns the memory/nonHeap part of system info as json.

To build, run tests and create the zip/tar distribution (`build/distributions`):

```
../gradlew build
```

If you want to run the server in development-mode (no need for server restarts on changes), then execute the following:

```
../gradlew run
```

If you change some Java-code, then the server needs a full restart.
