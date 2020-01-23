$("button").on('click', function(){
	$(".list").append('<div><input type="text" id="input"></div>');
	$('#input').keypress(function(evt){
		if(evt.which === 13){
			var value= $('#input').val()
			console.log(value);
			$('.list').append('<div><p> ' + value+ '</p></div>')
			console.log(this)
			$(this).remove();
		}

	})
})