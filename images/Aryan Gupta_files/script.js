$(document).ready(function(){
	$('#dpholder').css('margin-top', ($(window).height()/2 - 240)+'px');
	$('.page').css('top', $(window).height()+'px');
	$('#email,textarea').css('width', ($('.contactholder').width() - 44)+ 'px');
	$('input, textarea').css('border', '2px solid #6e6e6e');
});