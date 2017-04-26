// $(document).ready() is called an event
// Whatever is inside it will hapen when the page loads

// $() sign is the way that jQuery accesses objects ffomr the HTML doc
$(document).ready(function() {
	//var div = document.getElementById("content");
	//div.innerHTML = "Hey";
	$("#content").html("Hey");
	
	$("#btn1").click(function() { // Also an event
		var name = window.prompt("Enter name:");
		$("#content").html("Hey, " + name);
	});
	
	$("#btn2").click(function() { // Also an event
		$("#head1").html("Learned jQuery");
	});
})