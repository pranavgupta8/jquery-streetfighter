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
});
function playhadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}	