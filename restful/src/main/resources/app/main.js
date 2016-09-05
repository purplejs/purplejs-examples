// Create a new router.
var router = require('/lib/router')();

// Set-up the person controller and all routes.
require('/person/controller.js')(router);

// Serves all requests using the router.
exports.service = function (req) {
    return router.dispatch(req);
};

// Handle error
exports.handleError = function (error) {
    return {
        body: {
            status: error.status,
            message: error.message
        }
    };
};
