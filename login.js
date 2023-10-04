Template.login.events({
    'submit form': function(e) { 
        e.preventDefault(); 
        var email = event.target.email.value; 
        var password = event.target.password.value; 
        Meteor.loginWithPassword (email, password); 
    }
    });