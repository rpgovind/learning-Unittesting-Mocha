var assert = require('assert');
var ReviewProcess = require('../processes/review');
var MembershipApplication = require('../../membership_application');

describe('ReviewProcess', function() {
    describe('Reviewing a Valid application', function() {
        var decision;

        before(function(done) {
            var validApp = new MembershipApplication({
                firstName: 'John',
                lastName: 'Doe',
                age: 30,
                height: 161,
                weight: 150,
                email: 'test@yahoo.com'
            });
            var review = new ReviewProcess();
            review.processApplication(validApp, function(err, result) {
                decision = result;
                done();
            });
        });

        it('returns success', function() {
            assert(decision.success, decision.message);
        });
    })
});