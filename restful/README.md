<img align="right" src="https://raw.githubusercontent.com/purplejs/purplejs/master/misc/logo.png">

Restful Example
===============

This example shows how to build a simple restful application using the router. It retrieves and stores persons into a 
mock-database (in memory). 

* GET `/persons` - returns a list of all persons.
* GET `/persons/{id}` - returns a person with the specified id.
* PUT `/persons` - adds a new person.
* POST `/persons/{id}` - update an existing person.
* DELETE `/persons/{id}` - delete a existing person.
