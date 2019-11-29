$(document).ready(function(){
	var c1pos 
	var can1 = $('#can1')[0];
	can1.width = $(window).width()/2;
	can1.height = $(window).height();
	var ctx1 = can1.getContext('2d');

	var can2 = $('#can2')[0];
	can2.width = $(window).width()/2;
	can2.height = $(window).height();
	var ctx2 = can2.getContext('2d');

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
	function init2(){
		//setup grid2
		// ctx2.fillStyle = "#e74c3c"; 
		ctx2.fillStyle = '#2c3e50'
		ctx2.fillRect(0,0,$(window).width()/2,$(window).height());	
		ctx2.fillStyle = "#ecf0f1";
		ctx2.fillRect($(window).width()/4,0,2,$(window).height());
		ctx2.fillRect(0,0,2,$(window).height());	
		
		//car2
		ctx2.fillStyle = "#e74c3c";
		ctx2.fillRect($(window).width()/16+$(window).width()/32,3*$(window).height()/4,$(window).width()/16,$(window).height()/8)
	}
	function drawLeftRect(){
	var x=0;
	function drawLeftLaneRect(){
		// if(pos == 'left'){
			// while(i<791){
			// setInterval(function(){
				// while(i<$(window).height()){				
					ctx1.fillStyle = '#2c3e50'
					ctx1.fillRect($(window).width()/8 - 21,x-5,42,40)
					ctx1.fillStyle = '#3498db';
					ctx1.fillRect($(window).width()/8 - 20,x,40,40);
					x+=5;
					if(c1pos == 'left'){
						car1('left');
					}
				requestAnimationFrame(drawLeftLaneRect)
				
				// }
			// },5)
		// }
		// }else{
			// var i =0;
			// setInterval(function(){
				// while(i<$(window).height()){
					// ctx1.fillStyle = '#2c3e50'
					// ctx1.fillRect($(window).width()/4 + $(window).width()/8 - 21,i-1,42,40)
					// ctx1.fillStyle = '#3498db'
					// ctx1.fillRect($(window).width()/4 + $(window).width()/8 - 20,i,40,40)
					// i++
					// console.log(i);
					// if(c1pos == 'right'){
						// car1('right');
					// }
				// }
			// },5)

		// }
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
				}
				requestAnimationFrame(drawRightLaneRect)
		}
	requestAnimationFrame(drawRightLaneRect)
	}	
	function drawLeftCir(pos){
		if(pos == 'left'){
			var i =0;
			setInterval(function(){
				while(i<$(window).height()){
					ctx1.beginPath();
					ctx1.fillStyle = '#2c3e50'
					ctx1.arc($(window).width()/8, i+16, 22, 0, Math.PI * 2);
					ctx1.fill();
					ctx1.beginPath();
					ctx1.fillStyle = '#3498db'
					ctx1.arc($(window).width()/8 , i+20, 20, 0, Math.PI * 2);
					ctx1.fill();				
					i++
					if(c1pos == 'left'){
						car1('left');
					}
					console.log(i);
				}	
			},5)
		}else{
			var i =0;
			setInterval(function(){
				// while(i<$(window).height()){
					ctx1.beginPath();
					ctx1.fillStyle = '#2c3e50'
					ctx1.arc($(window).width()/4 + $(window).width()/8, i+16, 22, 0, Math.PI * 2);
					ctx1.fill();
					ctx1.beginPath();
					ctx1.fillStyle = '#3498db'
					ctx1.arc($(window).width()/4 + $(window).width()/8 , i+20, 20, 0, Math.PI * 2);
					ctx1.fill();				
					i++
					if(c1pos == 'right'){
						car1('right');
					}
					console.log(i);

				// }
			},5)	
		}
	}
	init1($(window).width()/16+$(window).width()/32);
	car1('left')
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
		}
	})
	setInterval(
		function(){
			// if(pos[Math.floor(Math.random()*2)] == 'left'){
				if(lane[Math.floor(Math.random()*2)] == 'left'){
					if(type[Math.floor(Math.random()*1)] == 'squ'){
						drawLeftRect();
					}else{
				// 		drawLeftCir('left')
					}				
				}else{
					if(type[Math.floor(Math.random()*1)] == 'squ'){
						drawLeftRect2()
					}else{
				// 		drawLeftCir('right')
					}									
				}
			// }

			if(pos[Math.floor(Math.random()*2)] == 'left'){

			}
		},1500)







})