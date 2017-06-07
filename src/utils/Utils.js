const utils = Object.create(null);
utils.plus = {};


utils.pc = {};


utils.common = {
    async fetch({url, method = "GET", data = null, success, error}){
        try {
            const xhr = typeof plus !== "undefined" ? new plus.net.XMLHttpRequest() : new XMLHttpRequest();
            const xhp = new Promise(function (resolve, reject) {
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        xhr.status === 200 ? resolve(xhr.responseText) : reject(xhr.status);
                    }
                }
            });
            xhr.open(method, url);
            xhr.send(data);
            success && success(await xhp);
        } catch (e) {
            error && void function () {
                (!isNaN(+e)) ? error("The httpStatus is " + e) : error(e);
            }
        }
    }
};


module.exports = utils;