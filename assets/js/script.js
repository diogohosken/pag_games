$(function(){

	let botCat = $('#botaoCategorias'), 
	botDes = $('#botaoDesenvolvedor'), 
	seaBar = $('#searchBar');

	botCat.hover(function(){

		botCat.toggleClass('text-white');
		
	});

	botDes.hover(function(){

		botDes.toggleClass('text-dark');

	});

	seaBar.bind('focus', function(){

		seaBar.addClass('bg-white');
		seaBar.addClass('text-muted');
		seaBar.css('box-shadow', ' 0 0 0 0').css('border', ' 0.5 none black').css('outline', '0');

	});

	seaBar.bind('blur', function(){

		seaBar.removeClass('bg-white');
		seaBar.removeClass('text-muted');

	});

	$('#ver_todos').hover(function(){

		$('#ver_todos').toggleClass('text-dark').toggleClass('text-warning');
		console.log('deu certo');

	});




	$('[data-toggle="tooltip"]').tooltip();




});


