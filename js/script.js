$(function () {
	$('body').on('click', '.mdl-floating-item-container button', function (event) {
		event.preventDefault();
		var ele = $(this);
		$(this).addClass('slide');
		setTimeout(function () {
			$(".mdl-floating-item-container .mdl-button-container").fadeOut();
			$(".mdl-floating-item-container .mdl-message-container").addClass('open');
			setTimeout(function () {
				ele.removeClass('slide');
			}, 500);
		}, 600);
	});
	$('body').on('click', '.close', function (event) {
		event.preventDefault();
		$(".mdl-floating-item-container .mdl-button-container").fadeIn();
		setTimeout(function () {
			$(".mdl-floating-item-container .mdl-message-container").fadeOut();
			setTimeout(function () {
				$(".mdl-floating-item-container .mdl-message-container").removeClass('open');
			}, 200);
		}, 400);
	});
	$('#keyword').keyup(function(e){
		if(e.keyCode == 13)
		{
			window.location.href='user_eqpt_aircon.html';
		}
	});
});