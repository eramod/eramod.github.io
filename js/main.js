
$(function(){
	$('#menu').slicknav({
		closeOnClick: true,
		duration: 400,
		label: '',
		prependTo: '.hero-image'
	});
});


var $root = $('html, body');
$('nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});