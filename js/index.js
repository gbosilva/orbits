$(document).ready(function(){

	var abrir = $('#abrir');

	abrir.on('click', function(){
		$('.contenido').toggleClass('abrir');
		// $('.contenido .padre').toggleClass('abrir-cerrar');
		// $('.contenido .padre').css({
		// 	'width': '100%'
		// });
	});

	var assignVideos = $('#assign-videos');		//Oculta el div de la seleccion de los videos

	assignVideos.on('click', function(){
		$('.assign-videos').slideToggle();		//Alterna oculta y muestra
	});

	//Funcion para seleccionar los videos

	var videosSeleccionados = $('#videos-seleccionados');
	var videosSeleccionadosClass = $('.videos-seleccionados');
	
	//Funcion para destruir la clase caja previamente creada

	//------------------------VIDEO 1------------------
	$('#video1').on('click', function(){
		//var video2
		var video1 = 1;
		//click
		var click = 0;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video1);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		//if($(videosSeleccionadosClass).children().length == 0) { //Si NO tiene contenido
   		//	videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor
   			//click = 1;
  		//} else {
    		//click = 0;
  		//}

		$('.n1').toggleClass('naranja');	//Si no tiene la clase naranja se la pone, si no se la quita
		

	});

	//------------------------VIDEO 2------------------
	$('#video2').on('click', function(){
		//var video2
		var video2 = 2;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video2);	//Crea div con atributo clase = caja y con texto = 1
		

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n2').toggleClass('naranja');	//Si no tiene la clase naranja se la pone, si no se la quita

	});
	//------------------------VIDEO 3------------------
	$('#video3').on('click', function(){
		//var video3
		var video3 = 3;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video3);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n3').toggleClass('naranja');	//Si no tiene la clase naranja se la pone, si no se la quita

	});

	//------------------------VIDEO 4------------------
	$('#video4').on('click', function(){
		//var video5
		var video4 = 4;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video4);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n4').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});
	//------------------------VIDEO 5------------------
	$('#video5').on('click', function(){
		//var video5
		var video5 = 5;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video5);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n5').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});

	//------------------------VIDEO 6------------------
	$('#video6').on('click', function(){
		//var video6
		var video6 = 6;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video6);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n6').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});
	//------------------------VIDEO 7------------------
	$('#video7').on('click', function(){
		//var video7
		var video7 = 7;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video7);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n7').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});

	//------------------------VIDEO 8------------------
	$('#video8').on('click', function(){
		//var video8
		var video8 = 8;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video8);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n8').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});
	//------------------------VIDEO 9------------------
	$('#video9').on('click', function(){
		//var video9
		var video9 = 9;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video9);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n9').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});

	//------------------------VIDEO 10------------------
	$('#video10').on('click', function(){
		//var video10
		var video10 = 10;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video10);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n10').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});
	//------------------------VIDEO 11------------------
	$('#video11').on('click', function(){
		//var video11
		var video11 = 11;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video11);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n11').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});

	//------------------------VIDEO 12------------------
	$('#video12').on('click', function(){
		//var video12
		var video12 = 12;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video12);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n12').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});
	//------------------------VIDEO 13------------------
	$('#video13').on('click', function(){
		//var video13
		var video13 = 13;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video13);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n13').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});

	//------------------------VIDEO 14------------------
	$('#video14').on('click', function(){
		//var video14
		var video14 = 14;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video14);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n14').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});
	//------------------------VIDEO 15------------------
	$('#video15').on('click', function(){
		//var video15
		var video15 = 15;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video15);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n15').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});

	//------------------------VIDEO 16------------------
	$('#video16').on('click', function(){
		//var video16
		var video16 = 16;
		//Variable caja
		var caja = $('<div></div>').attr('class', 'caja').text('video '+video16);	//Crea div con atributo clase = caja y con texto = 1

		videosSeleccionados.append(caja);	//Agrega la caja dentro del contenedor

		$('.n16').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita

	});

//Funcion click para cuando se seleccionan todos los videos
	$('#select').on('click', function(){

		for(var i = 1; i <= 16; i++){
			$('.n'+i).toggleClass('naranja');	//Si no tiene la clase naranja se la pone, si no se la quita
		}

		// $('.n1').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n2').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n3').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n4').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n5').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n6').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n7').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n8').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n9').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n10').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n11').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n12').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n13').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n14').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n15').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
		// $('.n16').toggleClass('naranja');	//Si no tiene la clase color se la pone, si no se la quita
	});
});