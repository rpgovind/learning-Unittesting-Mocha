var __ = require("underscore")._;

var moment = require('moment');

var MembershipApllication = function(args){
    args || (args ={})
    __.extend(this, args);

    this.validUntil = (args.validUntil) ?moment(args.validUntil) : moment().add(10,'days');
    
    this.expired  = function(){
        
        return this.validUntil .isBefore( moment());
    }
    this.isAgeValid = function(){
        return this.age && this.age > 1 && this.age <100;
    }
    this.isNameValid = function(){
            return this.firstName 
                && this.lastName
                && this.firstName.length > 0 
                && this.lastName.length > 0;
    }
    this.isHeightValid = function(){
        return this.height && this.height > 160 && this.height < 180;
    }
    this.isWeightValid = function(){    
        return this.weight && this.weight >100 && this.weight < 300 ;
    }
    this.isEmailValid = function(){
        return this.email && this.email.length > 1 && this.email.indexOf('@') >0;
    }
    this.isValid = function(){
        return this.isAgeValid() 
        && this.isHeightValid 
        && this.isWeightValid 
        && this.isNameValid
        && this.isEmailValid;
    };

    this.validationmessage = function(){
        if(this.isValid()){
            return 'Application is valid';
        }else if(!this.isEmailValid()){
         return 'email is invalid';   
        }
        else if(!this.isAgeValid()){
         return 'age is invalid';   
        }
        else if(!this.isNameValid()){
         return 'Name is invalid';   
        }
        else if(!this.isHeightValid()){
         return 'Height is invalid';   
        }
        else if(!this.isWeightValid()){
         return 'Weight is invalid';   
        }
    }
};

module.exports = MembershipApllication;
