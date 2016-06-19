///</// <reference path="../../index.d.ts" />


var async = require('async');

var ReviewProcess = function(args) {

    var app = args.application || {};
    // var callback;

    //make sure app is valid
    this.ensureAppValid = function(next) {
        if (app.isValid()) {
            next(null, true);
        } else {
            next(app.validationmessage(), null);
        }
    };
    //find the next mission
    this.findNextMission = function(next) {
    var  mission = {
            commander: null,
            pilot: null,
            NAVpilot: null,
            passengers: []
        }
        next( null, mission);
        // this.emit('mission-selected', app);
    };
    //make sure sole selected is available

    this.roleIsAvailable = function(next) {
        //this.emit('role-available', app);
        next( null, true);
    };
    //make sure height /weight/age is right for the role
    this.ensureRoleCompatible = function(next) {
        //this.emit('role-compatible', app);
        next(null, true);
    };


    //process application
    this.processApplication = function(next) {
        async.series({
            validApp: this.ensureAppValid,
            nextMission: this.findNextMission,
            roleAvailable: this.roleIsAvailable,
            roleCompatible: this.ensureRoleCompatible
            
        }, function(err, results) {
            if (err) {
                next(null, {
                    success: false,
                    message: err
                });
            } else {
                console.log('results : ->' , results);
                next(null, {
                    success: true,
                    message: 'Welcome to Mars!'
                });
            }
            // next(null, results);
        });

    };

};
module.exports = ReviewProcess;