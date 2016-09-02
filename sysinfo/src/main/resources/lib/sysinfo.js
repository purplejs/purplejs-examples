// Create a new instance of the Java object.
var bean = __.newBean('io.purplejs.examples.SysInfoBean');

// Exports getInfo function.
exports.getInfo = function () {
    // Call the Java method.
    var obj = bean.getInfo();

    // Translates the Java result into a native javascript-object.
    return __.toNativeObject(obj);
};
