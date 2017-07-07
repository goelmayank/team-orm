$(function() {
    $('#SubcribeBtn').click(function() {
        var data = { 
        	"form":{
        		"email": $('#email_subcribe').val() 
        	}
        };
        var request = $.ajax({
            url: "https://nodejs-rest-api.herokuapp.com/api/subscribe",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            // data: { json_string:JSON.stringify({form : json_string:JSON.stringify(subscribeForm)}) },
            dataType: "json"
        });

        request.done(function(msg) {
            // $("#log").html( msg );
            alert("Success: " + msg);
        });

        request.fail(function(jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
    });
    $('#contactFormBtn').click(function() {
        var data = {         
        "form": {    
                "name": $('#name').val(),
                "email": $('#email_contactForm').val(),
                "subject": $('#subject').val(),
                "message": $('#message').val()     
                }       
        };
        var contactForm = {
            "name": $('#name').val(),
            "email": $('#email_contactForm').val(),
            "subject": $('#subject').val(),
            "message": $('#message').val()
        }
        var request = $.ajax({
            url: "https://nodejs-rest-api.herokuapp.com/api/contactForm",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            // data: { json_string:JSON.stringify({form : json_string:JSON.stringify(contactForm)}) },
            dataType: "json"
        });

        request.done(function(msg) {
            // $("#log").html( msg );
            alert("Success: " + msg);
        });

        request.fail(function(jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
    });
});
