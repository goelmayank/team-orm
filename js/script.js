$(function(){
    $('#SubcribeBtn').click(function() {
        var subscribeForm = {action : document.orderproductForm.action.value,
           email : $('#email_contactForm').val()           
        }
        var email = $('#email_subcribe').val();
		var request = $.ajax({
		  url: "https://nodejs-rest-api.herokuapp.com/api/subscribe",
		  type: "POST",
		  data: {form : subscribeForm},
		  dataType: "json"
		});

		request.done(function(msg) {
		  // $("#log").html( msg );
		  alert("Success: " + msg);
		});

		request.fail(function(jqXHR, textStatus) {
		  alert( "Request failed: " + textStatus );
		});
    });
    $('#contactFormBtn').click(function() {
        var contactForm = {action : document.orderproductForm.action.value,
           name : $('#name').val(),
           email : $('#email_contactForm').val(),
           subject : $('#subject').val(),
           message : $('#message').val()
        }
		var request = $.ajax({
		  url: "https://nodejs-rest-api.herokuapp.com/contactForm",
		  type: "POST",
		  data: {form : contactForm},
		  dataType: "json"
		});

		request.done(function(msg) {
		  // $("#log").html( msg );
		  alert("Success: " + msg);
		});

		request.fail(function(jqXHR, textStatus) {
		  alert( "Request failed: " + textStatus );
		});
    });
});
