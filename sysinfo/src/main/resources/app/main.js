// Require our system info library.
var sysInfo = require('/lib/sysinfo');

// Handle get request.
exports.get = function (req) {
    var path = req.path;
    var result = sysInfo.getInfo();

    if (path.equals('/os')) {
        result = result.os;
    }

    if (path.equals('/memory')) {
        result = result.memory;
    }

    if (path.equals('/memory/heap')) {
        result = result.memory.heap;
    }

    if (path.equals('/memory/nonHeap')) {
        result = result.memory.nonHeap;
    }

    return {
        body: result
    };
};
