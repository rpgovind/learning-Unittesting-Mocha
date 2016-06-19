var __ = require("underscore")._;

var MembershipApllication = function(args){
    __.extend(this, args);
    
    this.isAgeValid = function(){
        return this.age && this.age >0 && this.age <100;
    }
    this.isNameValid = function(){
            return this.firstName 
                && this.lastName
                && this.firstName.length > 0 
                && this.lastName.length > 0;
    }
    this.isHeightValid = function(){
        return this.height && this.height > 10 && this.height < 180;
    }
    this.isWeightValid = function(){    
        return this.weight && this.weight >10 && this.weight < 300 ;
    }
    this.isEmailValid = function(){
        return this.email && this.email.length > 0 && this.email.indexOf('@') >0;
    }
    this.isValid = function(){
        return this.isAgeValid() 
        && this.isHeightValid 
        && this.isWeightValid 
        && this.isNameValid
        && this.isEmailValid;
    }
};

module.exports = MembershipApllication;
