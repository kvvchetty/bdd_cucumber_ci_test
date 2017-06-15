const fetch = require('node-fetch');
const buildUrl = require('build-url');

const port = process.env.PORT;

const baseUrl = 'http://localhost:' + port;

// The last response that we received
let lastResponse;

// Perform a GET request to the server
function get(url) {
    const realUrl = buildUrl(baseUrl, {
        path: url
    });

    lastResponse = fetch(realUrl)
        .then((res) => {
            let bodyPromise;
            const contentType = res.headers.get('content-type') || '';
            if (contentType.indexOf('application/json') >= 0) {
                bodyPromise = res.json();
            } else {
                bodyPromise = res.text();
            }

            return bodyPromise.then((body) => {
                return {
                    status: res.status,
                    headers: res.headers.raw(),
                    body: body
                };
            });
        });

    return lastResponse;
}

// Get the last response that we received
function getLastResponse() {
    return lastResponse;
}

module.exports = {
    get: get,
    getLastResponse: getLastResponse
};
