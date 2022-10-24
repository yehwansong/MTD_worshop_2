$(document).ready(function(){
	var counter = 0
transform()
    function transform(){
    	counter  = counter+0.1
    	$('div').css({'transform':'scale('+counter%5+')'})
        setTimeout(function(){
            transform()
        },100)
    }
})