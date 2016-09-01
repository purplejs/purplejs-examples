// Serve json response.
function serveJson(body, status) {
    return {
        status: status || 200,
        body: body,
        contentType: 'application/json'
    };
}

// Serve a json error response.
function serveError(message, status) {
    return serveJson({
        status: status,
        message: message
    }, status);
}

// Serve not found error.
function serveNotFound(message) {
    return serveError(message, 404);
}

// Export methods
exports = {
    serveJson: serveJson,
    serveError: serveError,
    serveNotFound: serveNotFound
};
