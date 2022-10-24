$(document).ready(function(){
	var counter = 0
transform()
    function transform(){
    	counter++
    	$('div').css({'transform':'rotate('+counter+'deg)'})
        setTimeout(function(){
            transform()
        },100)
    }
})