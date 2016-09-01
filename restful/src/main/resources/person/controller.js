// Requires the person storage service.
var store = require('./store');

// Requires the http module.
var http = require('/lib/http');

// Requires utility methods for response.
var response = require('../util/response');

// Returns a 404 error.
function personNotFound(id) {
    return response.serveNotFound('Person [' + id + '] not found');
}

// Returns a 400 error.
function mustBeJsonBody() {
    return response.serveError('Must be a JSON body', 400);
}

// Serves all persons as JSON.
function getPersons() {
    return response.serveJson(store.getPersons());
}

// Serve one person if exists, 404 otherwise.
function getPerson(req) {
    var id = req.pathParams.id;
    var person = store.getPerson(id);

    if (person) {
        return response.serveJson(person);
    } else {
        return personNotFound(id);
    }
}

// Update one person if exists, 404 otherwise.
function updatePerson(req) {
    var id = req.pathParams.id;
    var person = store.getPerson(id);

    if (!person) {
        return personNotFound(id);
    }

    var body = http.bodyAsJson();
    if (!body) {
        return mustBeJsonBody();
    }

    if (body.name) {
        person.name = body.name;
    }

    if (body.age) {
        person.age = body.age;
    }

    store.savePerson(person);

    return {
        status: 204
    };
}

// Delete one person if exists, 404 otherwise.
function deletePerson(req) {
    var id = req.pathParams.id;
    var flag = store.deletePerson(id);

    if (flag) {
        return {
            status: 204
        };
    }

    return personNotFound(id);
}

// Add a new person to the store and returns 201 with the person ID.
function addPerson() {
    var body = http.bodyAsJson();
    if (!body) {
        return mustBeJsonBody();
    }

    var person = store.savePerson({
        name: body.name || 'Unknown',
        age: body.age || 0
    });

    return {
        status: 201,
        body: person.id.toFixed(0)
    };
}

// Sets up all routes.
exports = function (router) {
    router.get('/persons', getPersons);
    router.get('/persons/{id}', getPerson);
    router.delete('/persons/{id}', deletePerson);
    router.post('/persons/{id}', updatePerson);
    router.put('/persons', addPerson);
};
