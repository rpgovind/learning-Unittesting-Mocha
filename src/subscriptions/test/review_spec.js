///</// <reference path="../../index.d.ts" />
// /Users/rameshpg/Learning/UnitTesting/demo/src/index.d.ts

var assert = require('assert');
var ReviewProcess = require('../processes/review');
var MembershipApplication = require('../../membership_application');
var sinon = require('sinon');
describe('ReviewProcess', function() {
    describe('Reviewing a Valid application', function() {
        var decision;
        var validApp = new MembershipApplication({
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            height: 161,
            weight: 150,
            email: 'test@yahoo.com',
            validUntil : Date.parse('06/20/2016')
        });

        var review = new ReviewProcess();
        var spy_email = sinon.spy(validApp, 'isEmailValid');
        var spy_age = sinon.spy(validApp, 'isAgeValid');
        var spy_height = sinon.spy(validApp, 'isHeightValid');
        var spy_name = sinon.spy(validApp, 'isNameValid');
        var spy_weight = sinon.spy(validApp, 'isWeightValid');
        var spy_expired = sinon.spy(validApp, 'isExpired');

        var spy =  sinon.spy();
        before(function(done) {
            review.on('application-received', spy);
            review.on('validated', spy);
            review.on('mission-selected', spy);
            review.on('role-available', spy);
            review.on('role-compatible', spy);
            review.on('invalid', spy);
            review.processApplication(validApp, function(err, result) {
                decision = result;
                done();
            });
        });

        it('returns success', function() {
            assert(decision.success, decision.message);
        });

        it('Validates e-mail', function() {
            assert(spy_email.called, decision.message);
        });


        it('Validates age', function() {
            assert(spy_age.called, decision.message);
        });

        it('Validates name', function() {
            assert(spy_name.called, decision.message);
        });
        it('Validates height', function() {
            assert(spy_height.called, decision.message);
        });

        it('Validates weight', function() {
            assert(spy_weight.called, decision.message);
        });

        it('Validates expiration date', function() {
            assert(spy_expired.called, decision.message);
        });

        it('Validated', function() {         
            assert.equal(spy.callCount,5);
        });
    })
});