
$(document).ready(function() {
	$('#registration-form').submit(function(event) {
	  event.preventDefault();
	  var formData = $(this).serialize();
	  var CondEl = document.getElementById("condition");
	  $.ajax({
		type: 'POST',
		url: ' http://localhost:8000/php/register.php',
		data: formData,
		dataType: 'json',
		success: function(response) {
			CondEl.innerText = 'Registration Successful!';
			setTimeout(()=> {
				window.location.href = 'login.html';			 }
			 ,3000);

		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log('AJAX Error:', textStatus, errorThrown);
		  }
	  });
	});
  });
