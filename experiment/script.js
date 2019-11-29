$(document).ready(function(){
	// alert('Welcome to 2 cars. To move the left car use the S & D keys, to move the right car use the K & L keys. The aim is simple, avoid the squares and catch the circles. Good luck.')
	var c1pos = 'left'
	var c2pos = 'right'
	var inter1 = 800;
	var inter2 = 800;
	var score = 0;
	var leftar;
	var rightar;
	var can1 = $('#can1')[0];
	can1.width = $(window).width()/2;
	can1.height = $(window).height();
	var ctx1 = can1.getContext('2d');

	var can2 = $('#can2')[0];
	can2.width = $(window).width()/2;
	can2.height = $(window).height();
	var ctx2 = can2.getContext('2d');
	$('#scoreb').css('left',$(window).width()/2 - $('#scoreb').width()/2)
	$('#scoreb').html(score);
	function init1(){
		//setup grid1
		// ctx1.fillStyle = '#3498db';
		ctx1.fillStyle = '#2c3e50';
		ctx1.fillRect(0,0,$(window).width()/2,$(window).height());
		ctx1.fillStyle = "#ecf0f1";
		ctx1.fillRect($(window).width()/4,0,2,$(window).height());
		ctx1.fillRect($(window).width()/2-2,0,2,$(window).height());
	}
	function car1(pos){
		if(pos == 'left'){
			ctx1.fillStyle = "#3498db";
			ctx1.fillRect($(window).width()/16+$(window).width()/32,3*$(window).height()/4,$(window).width()/16,$(window).height()/8)				
			// car1('left')
		}else{
			ctx1.fillStyle = "#3498db";
			ctx1.fillRect($(window).width()/4+$(window).width()/16+$(window).width()/32,3*$(window).height()/4,$(window).width()/16,$(window).height()/8)						
			// car2('right')
		}
	}
	function car2(pos){
		if(pos == 'left'){
			ctx2.fillStyle = "#e74c3c";
			ctx2.fillRect($(window).width()/16+$(window).width()/32,3*$(window).height()/4,$(window).width()/16,$(window).height()/8)				
			// car1('left')
		}else{
			ctx2.fillStyle = "#e74c3c";
			ctx2.fillRect($(window).width()/4+$(window).width()/16+$(window).width()/32,3*$(window).height()/4,$(window).width()/16,$(window).height()/8)						
			// car2('right')
		}
	}

	function init2(){
		//setup grid2
		// ctx2.fillStyle = "#e74c3c"; 
		ctx2.fillStyle = '#2c3e50'
		ctx2.fillRect(0,0,$(window).width()/2,$(window).height());	
		ctx2.fillStyle = "#ecf0f1";
		ctx2.fillRect($(window).width()/4,0,2,$(window).height());
		ctx2.fillRect(0,0,2,$(window).height());	
	}


	function drawLeftRect(){
		var x=0;
		function drawLeftLaneRect(){		
			ctx1.fillStyle = '#2c3e50'
			ctx1.fillRect($(window).width()/8 - 21,x-5,42,40)
			ctx1.fillStyle = '#3498db';
			ctx1.fillRect($(window).width()/8 - 20,x,40,40);
			x+=5;
			if(c1pos == 'left'){
				car1('left');
				if(x >(3*$(window).height()/4+4) && x <= (3*$(window).height()/4+10) ){
					clearInterval(leftar);
					clearInterval(rightar);
					// $('.endcont').css('display','flex')
					$('.scoreline').html("Your final score was "+score);
					alert("Your final score was "+score)
					location.reload();
					// $('.again').click(function(){
					// 	$('.endcont').css('display','none')
					// 	ctx1.clearRect(0,0,$(window).width(),$(window).height());
					// 	ctx2.clearRect(0,0,$(window).width(),$(window).height());
					// 	begin();
					// })
					// alert('Game Over!! Your final score was '+score)
					// location.reload();
					// ctx1.clearRect(0,0,$(window).width(),$(window).height());
					// $('canvas').css('display','none')
				}
			}
			requestAnimationFrame(drawLeftLaneRect)
		}
		requestAnimationFrame(drawLeftLaneRect);
	}
	function drawLeftRect2(){
		var y=0;
		function drawRightLaneRect(){
			ctx1.fillStyle = '#2c3e50'
			ctx1.fillRect($(window).width()/4 + $(window).width()/8 - 21,y-5,42,40)
			ctx1.fillStyle = '#3498db'
			ctx1.fillRect($(window).width()/4 + $(window).width()/8 - 20,y,40,40)
			y+=5;
			if(c1pos == 'right'){
				car1('right');
				if(y >(3*$(window).height()/4+4) && y <= (3*$(window).height()/4+10) ){
					clearInterval(leftar);
					clearInterval(rightar);
					// $('.endcont').css('display','flex')
					$('.scoreline').html("Your final score was "+score);
					alert("Your final score was "+score)
					location.reload();
					// $('.again').click(function(){
					// 	$('.endcont').css('display','none')
					// 	ctx1.clearRect(0,0,$(window).width(),$(window).height());
					// 	ctx2.clearRect(0,0,$(window).width(),$(window).height());
					// 	begin();
					// })
					// location.reload();
				}
			}
			requestAnimationFrame(drawRightLaneRect)
		}
		requestAnimationFrame(drawRightLaneRect)
	}	

	function drawLeftCir(){
		var x=0;
		function drawLeftLaneCir(){
			ctx1.beginPath();
			ctx1.fillStyle = '#2c3e50'
			ctx1.arc($(window).width()/8, x+16, 22, 0, Math.PI * 2);
			ctx1.fill();
			ctx1.beginPath();
			ctx1.fillStyle = '#3498db'
			ctx1.arc($(window).width()/8 , x+20, 20, 0, Math.PI * 2);
			ctx1.fill();				
			x+=5;
			if(c1pos == 'left'){
				car1('left');
				if(x >(3*$(window).height()/4+4) && x <= (3*$(window).height()/4+9) ){
					score++;
					inter1--;
					$('#scoreb').html(score);
				}
			}
			requestAnimationFrame(drawLeftLaneCir)
		}
		requestAnimationFrame(drawLeftLaneCir)
	}
	function drawLeftCir2(){
		var y=0;
		function drawRightLaneCir(){
			ctx1.beginPath();
			ctx1.fillStyle = '#2c3e50'
			ctx1.arc($(window).width()/4 + $(window).width()/8, y+16, 22, 0, Math.PI * 2);
			ctx1.fill();
			ctx1.beginPath();
			ctx1.fillStyle = '#3498db'
			ctx1.arc($(window).width()/4 + $(window).width()/8 , y+20, 20, 0, Math.PI * 2);
			ctx1.fill();				
			y+=5;
			if(c1pos == 'right'){
				car1('right');
				if(y >(3*$(window).height()/4+4) && y <= (3*$(window).height()/4+9) ){
					score++;
					inter1--;
					$('#scoreb').html(score);
				}
			}
			requestAnimationFrame(drawRightLaneCir)
		}
		requestAnimationFrame(drawRightLaneCir)
	}




	function drawRightRect(){
		var x=0;
		function drawLeftLaneRect(){		
			ctx2.fillStyle = '#2c3e50'
			ctx2.fillRect($(window).width()/8 - 21,x-5,42,40)
			ctx2.fillStyle = '#e74c3c';
			ctx2.fillRect($(window).width()/8 - 20,x,40,40);
			x+=5;
			if(c2pos == 'left'){
				car2('left');
				if(x >(3*$(window).height()/4+4) && x <= (3*$(window).height()/4+10) ){
					clearInterval(leftar);
					clearInterval(rightar);
					// $('.endcont').css('display','flex')
					$('.scoreline').html("Your final score was "+score);
					alert("Your final score was "+score)
					location.reload();
					// $('.again').click(function(){
					// 	$('.endcont').css('display','none')
					// 	ctx1.clearRect(0,0,$(window).width(),$(window).height());
					// 	ctx2.clearRect(0,0,$(window).width(),$(window).height());
					// 	begin();
					// })
					// location.reload();
				}
			}
			requestAnimationFrame(drawLeftLaneRect)
		}
		requestAnimationFrame(drawLeftLaneRect);
	}
	function drawRightRect2(){
		var y=0;
		function drawRightLaneRect(){
			ctx2.fillStyle = '#2c3e50'
			ctx2.fillRect($(window).width()/4 + $(window).width()/8 - 21,y-5,42,40)
			ctx2.fillStyle = '#e74c3c'
			ctx2.fillRect($(window).width()/4 + $(window).width()/8 - 20,y,40,40)
			y+=5;
			if(c2pos == 'right'){
				car2('right');
				if(y >(3*$(window).height()/4+4) && y <= (3*$(window).height()/4+10) ){
					clearInterval(leftar);
					clearInterval(rightar);
					// $('.endcont').css('display','flex')
					$('.scoreline').html("Your final score was "+score);
					alert("Your final score was "+score)
					location.reload();
					// $('.again').click(function(){
					// 	$('.endcont').css('display','none')
					// 	ctx1.clearRect(0,0,$(window).width(),$(window).height());
					// 	ctx2.clearRect(0,0,$(window).width(),$(window).height());
					// 	begin();
					// })
					// location.reload();
				}
			}
			requestAnimationFrame(drawRightLaneRect)
		}
		requestAnimationFrame(drawRightLaneRect)
	}	

	function drawRightCir(){
		var x=0;
		function drawLeftLaneCir(){
			ctx2.beginPath();
			ctx2.fillStyle = '#2c3e50'
			ctx2.arc($(window).width()/8, x+16, 22, 0, Math.PI * 2);
			ctx2.fill();
			ctx2.beginPath();
			ctx2.fillStyle = '#e74c3c'
			ctx2.arc($(window).width()/8 , x+20, 20, 0, Math.PI * 2);
			ctx2.fill();				
			x+=5;
			if(c2pos == 'left'){
				car2('left');
				if(x >(3*$(window).height()/4+4) && x <= (3*$(window).height()/4+9) ){
					score++;
					inter2--
					$('#scoreb').html(score);

				}
			}
			requestAnimationFrame(drawLeftLaneCir)
		}
		requestAnimationFrame(drawLeftLaneCir)
	}
	function drawRightCir2(){
		var y=0;
		function drawRightLaneCir(){
			ctx2.beginPath();
			ctx2.fillStyle = '#2c3e50'
			ctx2.arc($(window).width()/4 + $(window).width()/8, y+16, 22, 0, Math.PI * 2);
			ctx2.fill();
			ctx2.beginPath();
			ctx2.fillStyle = '#e74c3c'
			ctx2.arc($(window).width()/4 + $(window).width()/8 , y+20, 20, 0, Math.PI * 2);
			ctx2.fill();				
			y+=5;
			if(c2pos == 'right'){
				car2('right');
				if(y >(3*$(window).height()/4+4) && y <= (3*$(window).height()/4+9) ){
					score++;
					inter2--
					$('#scoreb').html(score);

				}
			}
			requestAnimationFrame(drawRightLaneCir)
		}
		requestAnimationFrame(drawRightLaneCir)
	}







	var pos = ['left','right'];
	var lane = ['left','right'];
	var type = ['squ','cir'];

	$(window).keypress(function(e){
		// alert(e.keyCode);
		switch(e.keyCode){
			case 100 : 
				init1();	
				c1pos = 'right'
				car1(c1pos)
				// drawLeftRect();
				break;
			case 115 :
				init1();
				c1pos = 'left'
				car1(c1pos)
				break;
			case 108:
				init2();
				c2pos = 'right'
				car2(c2pos);
				break;
			case 107:
				init2();
				c2pos = 'left'
				car2(c2pos)
		}
	})
	function begin(){
		init1();
		init2();
		car1('left')
		car2('right')
		leftar = setInterval(
			function(){
				// if(pos[Math.floor(Math.random()*2)] == 'left'){
			if(lane[Math.floor(Math.random()*2)] == 'left'){
				if(type[Math.floor(Math.random()*2)] == 'squ'){
					drawLeftRect();
				}else{
					drawLeftCir()
				}				
			}else{
				if(type[Math.floor(Math.random()*2)] == 'squ'){
					drawLeftRect2()
				}else{
					drawLeftCir2()
				}									
			}
		},inter1)
		setTimeout(function(){
			rightar = setInterval(
				function(){
				if(lane[Math.floor(Math.random()*2)] == 'left'){
					if(type[Math.floor(Math.random()*2)] == 'squ'){
						drawRightRect();
					}else{
						drawRightCir()
					}				
				}else{
					if(type[Math.floor(Math.random()*2)] == 'squ'){
						drawRightRect2()
					}else{
						drawRightCir2()
					}									
				}
			},inter2)
		},500)		
	}
	begin();
})


