$(function(){

	let botCat = $('#botaoCategorias');
	let botDes = $('#botaoDesenvolvedor');

	botCat.hover(function(){

		botCat.toggleClass('text-white');
		
	});

	botDes.hover(function(){

		botDes.toggleClass('text-dark');

	})

});

/*

	function toggleTextColor(){
			document.getElementById('botaoCategorias').classList.add('text-light');
		} */


