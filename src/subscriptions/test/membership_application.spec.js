///</// <reference path="typings/index.d.ts" />
///</// <reference path="../membership_application.js" />

var assert= require('assert');

var MembershipApplication = require('../../membership_application');

describe('Applying for a Mission', function(){
    var validApp;
    before (function(){
        validApp = new MembershipApplication({
            firstName : 'John',
            lastName :'Doe',
            age :30,
            height:12,
            weight :50,
            email : 'test@yahoo.com'
        });
    })
    describe('Using a valid email , first, last, height, age, weight', function(){
        it('is valid', function(){
            assert(validApp.isValid(),'Not Valid' );
        });
        it('is valid email', function(){
            assert(validApp.isEmailValid(), 'Not Valid')
        });

        it('is valid Name', function () {
            assert(validApp.isNameValid,'Not Valid  Name');
        });

        it('is valid weight', function(){
            assert(validApp.isHeightValid, 'not a Valid height');
        });

        it('is valid height', function(){
            assert(validApp.isWeightValid, 'Not valid height');
        });

        it('is valid age', function(){
            assert(validApp.isAgeValid(), 'not valid age');
        });

        it('is valid weight', function(){
            assert(validApp.isWeightValid(), 'not a vlaid weight');
        });

    });
});