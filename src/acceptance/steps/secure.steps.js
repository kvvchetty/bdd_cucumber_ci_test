const defineSupportCode = require('cucumber').defineSupportCode;
const requester = require('./requester');

defineSupportCode(function ({ When }) {
    When('I retrieve the Secure Resource', function() {
        return requester.get('api/secure');
    });
});
