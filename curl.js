module.exports = function(url) {
    const request = require('request');
    request(url, function(error, response, body) {
        if(error) {
            throw error;
        }
        else {
            process.stdout.write(body);
        }
    })
};
