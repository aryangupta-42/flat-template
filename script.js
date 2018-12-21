$(document).ready(function(){
	setTimeout(function(){
		$('html,body').animate({
			scrollTop : 0
		},10);		
	},500)
	$('#dpholder').css('margin-top', ($(window).height()/2 - 240)+'px');
	$('.page').css('top', $(window).height()+'px');
	$('.email,textarea').css('width', ($('.contactholder').width() - 56)+ 'px');
	$('form').submit(function(e){
		e.preventDefault();
		$('.output').html($('.email').first().val() + " commented : " + $('textarea').val());
		$('.email').val('');
		$('textarea').val('');
		$('.output').css('opacity','1');
		setTimeout(function(){
			$('.output').css('opacity','0');
		}, 3000);
	})

//--------header--------------

	$(document).scroll(function(){
		var s = $(document).scrollTop();
		if(s == 0){
			$('.header').css({
				'background-color': 'rgba(255,255,255,0)',
				'border-bottom': '0px solid rgba(0,0,0,0.7)'
			})
		}else if(s >= $('#page1').offset().top - 55){
			$('.header').css({
				'background-color': 'rgba(255,255,255,1)',
				'border-bottom': '4px solid rgba(0,0,0,0.7)'
			})
		}else{
			$('.header').css({
				'background-color': 'rgba(255,255,255,0.8)',
				'border-bottom': '0px solid rgba(0,0,0,0.7)'
			})
		}
	})


	$('#classybtn').click(function(){
		$('html,body').animate({
			scrollTop : $('#page1').offset().top - 55
		},500,);
	})

	$('#h1').click(function(){
		$('html,body').animate({
			scrollTop : 0
		},500,);
	})
	$('#h2').click(function(){
		$('html,body').animate({
			scrollTop : $('#page1').offset().top - 55
		},500,);
	})
	$('#h3').click(function(){
		$('html,body').animate({
			scrollTop : $('#page2').offset().top - 55
		},500,);
	})
	$('#h4').click(function(){
		$('html,body').animate({
			scrollTop : $('#page3').offset().top - 55
		},500,);
	})
	$('#h5').click(function(){
		$('html,body').animate({
			scrollTop : $('#page4').offset().top + 25
		},500,);
	})

	setTimeout(function(){
		$('.loadanim').css({
			'transform': 'translate(0px, -40px)',
			'opacity': '0'
		})
	},3900)
	setTimeout(function(){
		$('.loadanim').css('display','none');
	},4300)

	$(document).scroll(function(){
		var st = $(document).scrollTop();
		$('.coverpg').css({
			'transform':'translateY(-'+st/10+'px)',
			'-webkit-filter': 'blur(' + st/160 + 'px)'
		})
		if(st == 0){
			$('.hitem').css({
				'background-color':'rgba(0,0,0,0)',
				'color':'black'
			})
			
		}else if(st < $('#page1').offset().top - 55){
			$('.hitem').css({
				'background-color':'rgba(0,0,0,0)',
				'color':'black'
			})
			$('#h1').css({
				'background-color':'rgba(0,0,0,0.7)',
				'color':'white'
			})
			$('.coverpg').css({
				'transform':'translateY(-'+st/10+'px)',
				'-webkit-filter': 'blur(' + st/160 + 'px)'
			})
		}else if(st >= $('#page1').offset().top - 55 && st < $('#page2').offset().top - 65){
			$('.hitem').css({
				'background-color':'rgba(0,0,0,0)',
				'color':'black'
			})
			$('#h2').css({
				'background-color':'rgba(0,0,0,0.7)',
				'color':'white'
			})
			$('.coverpg').css({
				'transform':'translateY(-'+st/10+'px)',
				'-webkit-filter': 'blur(0px)'
			})
		}else if(st >= $('#page2').offset().top - 65 && st < $('#page3').offset().top - 65){
			$('.hitem').css({
				'background-color':'rgba(0,0,0,0)',
				'color':'black'
			})
			$('#h3').css({
				'background-color':'rgba(0,0,0,0.7)',
				'color':'white'
			})
		}else if(st >= $('#page3').offset().top - 65 && st < $('#page4').offset().top - 55){
			$('.hitem').css({
				'background-color':'rgba(0,0,0,0)',
				'color':'black'
			})
			$('#h4').css({
				'background-color':'rgba(0,0,0,0.7)',
				'color':'white'
			})
		}else if(st >= $('#page4').offset().top - 55){
			$('.hitem').css({
				'background-color':'rgba(0,0,0,0)',
				'color':'black'
			})
			$('#h5').css({
				'background-color':'rgba(0,0,0,0.7)',
				'color':'white'
			})
		}
	})

});