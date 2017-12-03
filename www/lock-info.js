var exec = require("cordova/exec");

var lock = {};

lock.isLocked = function (successCallback, errorCallback) {
    exec(
        successCallback,
        errorCallback,
        'LockInfoPlugin',
        'isLocked',
        []
    );
}

lock.isScreen = function (successCallback, errorCallback) {
    exec(
        successCallback,
        errorCallback,
        'LockInfoPlugin',
        'isScreen',
        []
    );
}

exports.getDeviceMeta = function(success, error) {
    exec(success, error, "DeviceMeta", "getDeviceMeta", []);
};


module.exports.isLocked = lock;
