// Check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Check to see if user has pressed enter key 
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing todo text from input
		var todoText = $(this).val();
		//create new li and add to ul
		console.log(todoText);
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});

// Click on Plus icon to make input appear and disappear
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})