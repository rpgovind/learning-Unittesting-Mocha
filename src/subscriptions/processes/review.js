var EventEmitter = require('events').EventEmitter;

var util = require('util');

var ReviewProcess = function(args) {

this.step1 = {};
    var callback;

    this.startMethod = function(){
        console.log('I am here, debug');
    };
    //make sure app is valid
    this.ensureAppValid = function(app){
        if(app.isValid()){
            this.emit('validated', app);
        }else{
            this.emit('invalid', app.validationmessage());
        }
    };
    //find the next mission
    this.findNextMission = function(app){
        app.mission = {
            commander : null,
            pilot : null,
            NAVpilot :null,
            passengers : []
        }
        this.emit('mission-selected',app);
    };
    //make sure sole selected is available

    this.roleIsAvailable = function(app){
        this.emit('role-available', app);
    };
    //make sure height /weight/age is right for the role
    this.ensureRoleCompatible =  function(app){
        this.emit('role-compatible', app);
    };
    //accept app
    this.acceptApplication = function(app){
        callback(null,{
            success : true,
            message : 'Welcome to Mars program!'
        });
    };

    //deny app
    this.denyApplication = function(message){
        callback(null, {
            success: false,
            message : message
        })
    };

    //process application
    this.processApplication = function (app, next){
        // process.stdout.print('processApplication');
        callback = next;
        this.emit('application-received',app);
       
    };

//event path or event chain
    this.on('application-received', this.ensureAppValid);
    this.on('validated', this.findNextMission);
    this.on('mission-selected', this.roleIsAvailable);
    this.on('role-available', this.ensureRoleCompatible);
    this.on('role-compatible', this.acceptApplication);
    this.on('invalid', this.denyApplication);
};


util.inherits(ReviewProcess, EventEmitter);

module.exports = ReviewProcess;
