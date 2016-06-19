///</// <reference path="typings/index.d.ts" />
///</// <reference path="../membership_application.js" />

var assert= require('assert');

var MembershipApplication = require('../../membership_application');

describe('Membership application requirements', function(){
    var validApp;
    before (function(){
        validApp = new MembershipApplication({
            firstName : 'John',
            lastName :'Doe',
            age :30,
            height:161,
            weight :150,
            email : 'test@yahoo.com'
        });
    })
    describe('Validations', function(){
        it('Application is valid if all validations succeeds', function(){
            assert(validApp.isValid(),'Not Valid' );
        });
        it('date validation', function(){
            assert(!validApp.expired(), 'date is not expired');
        });
        it('Email is not empty and contains @', function(){
            assert(validApp.isEmailValid(), 'Not Valid')
        });

        it('email is omitted', function () {
            var app = new MembershipApplication();
            assert(!app.isEmailValid(),'Not Valid  Name');
        });

        it('Name is not empty', function () {
            assert(validApp.isNameValid(),'Not Valid  Name');
        });



        it('Height is between 60 and 100 inches', function(){
            assert(validApp.isHeightValid(), 'Not valid height');
        });

        it('Age is between 1 and 100', function(){
            assert(validApp.isAgeValid(), 'not valid age');
        });

        it('Weight is between 100 and 300 lbs', function(){
            assert(validApp.isWeightValid(), 'not a valid weight');
        });

    });
});