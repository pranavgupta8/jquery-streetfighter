$(document).ready(function() {
	$('.ryu')
	.mouseenter(function() {
		$('.ryu .ryu-still').hide();
		$('.ryu .ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu .ryu-still').show();
		$('.ryu .ryu-ready').hide();
	})
	.mousedown(function() {
		playhadouken();
		$('.ryu .ryu-ready').hide();
		$('.ryu .ryu-throwing').show();
		$('.ryu .hadouken').show();
		$('.ryu .hadouken').finish().show()
		.animate(
			{'left': '1040px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '540px');
			}
			);
	})
	.mouseup(function() {
		$('.ryu .ryu-throwing').hide();
		$('.ryu .ryu-ready').show();
	});
	$('.hulk-ryu')
	.mouseenter(function() {
		$('.hulk-ryu .ryu-still').hide();
		$('.hulk-ryu .ryu-ready').show();
	})
	.mouseleave(function() {
		$('.hulk-ryu .ryu-still').show();
		$('.hulk-ryu .ryu-ready').hide();
	})
	.mousedown(function() {
		playhadouken();
		$('.hulk-ryu .ryu-ready').hide();
		$('.hulk-ryu .ryu-throwing').show();
		$('.hulk-ryu .hulk-hadouken').show();
		$('.hulk-ryu .hulk-hadouken').finish().show()
		.animate(
			{'left': '540px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '1040px');
			}
			);
	})
	.mouseup(function() {
		$('.hulk-ryu .ryu-throwing').hide();
		$('.hulk-ryu .ryu-ready').show();
	});
	/*$(document).keydown(function(event1) {
		if (event1.which == 90) {
			$('.ryu .ryu-still').hide();
			$('.ryu .ryu-ready').hide();
			$('.ryu .ryu-throwing').hide();
			$('.ryu .ryu-cool').show();
		}*/
	/*$(document).keydown(function(event2) {
		if (event2.which == 88) {
			$('.hulk-ryu .ryu-still').hide();
			$('.hulk-ryu .ryu-ready').hide();
			$('.hulk-ryu .ryu-throwing').hide();
			$('.hulk-ryu .ryu-cool').show();
		}*/
	//});
});
function playhadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}