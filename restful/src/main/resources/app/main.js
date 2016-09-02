// Create a new router.
var router = require('/lib/router')();

// Adds a filter that adds a custom JSON-based error page.
router.filter(function (req, next) {
    var res = next(req);

    if (res.status == 404) {
        if (res.body) {
            return res;
        }

        res.body = {
            status: 404,
            message: 'Not found'
        };
    }

    return res;
});

// Set-up the person controller and all routes.
require('/person/controller.js')(router);

// Serves all requests using the router.
exports.service = function (req) {
    return router.dispatch(req);
};
