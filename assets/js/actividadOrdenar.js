$(document).ready(function () {
	$(".actividad5").sortable();
	$(".actividad4").sortable();

	var cards = $(".cards-asc");
	for(var i = 0; i < cards.length; i++){
	    var target = Math.floor(Math.random() * cards.length -1) + 1;
	    var target2 = Math.floor(Math.random() * cards.length -1) +1;
	    cards.eq(target).before(cards.eq(target2));
	}

	var cards = $(".cards-asc2");
	for(var i = 0; i < cards.length; i++){
	    var target = Math.floor(Math.random() * cards.length -1) + 1;
	    var target2 = Math.floor(Math.random() * cards.length -1) +1;
	    cards.eq(target).before(cards.eq(target2));
	}
	$('#validadActividad5').off('click').on('click', function(){
		var ordenArray = new Array();
        $(".cards-asc").each(function(){
    	    
    	    ordenArray.push($(this).data("xc"));
    	});
    	console.log(isAscending(ordenArray));
    	if (isAscending(ordenArray)) {
    		Swal.fire(
                        '¡Buen trabajo!',
                        'Has acertado',
                        'success'
                    )
    	} else {
    		Swal.fire(
                '¡Lo siento!',
                'Puedes intentarlo de nuevo',
                'error'
            )  
		}
	});

	$('#validadActividad4').off('click').on('click', function(){
		var ordenArray = new Array();
        $(".cards-asc2").each(function(){
    	    
    	    ordenArray.push($(this).data("xc"));
    	});
    	console.log(isAscending(ordenArray));
    	if (isAscending(ordenArray)) {
    		Swal.fire(
                        '¡Buen trabajo!',
                        'Has acertado',
                        'success'
                    )
    	} else {
    		Swal.fire(
                '¡Lo siento!',
                'Puedes intentarlo de nuevo',
                'error'
            )  
		}
	});



    var isAscending = a => a.slice(1)
                        .map((e,i) => e > a[i])
                        .every(x => x);
});