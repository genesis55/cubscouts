$(document).ready(function() {
	myFunction();
	getLunch();
});

function myFunction() {
	$('#my_div').text('hello');
}

function getLunch() {
	var mc_elementary_lunch_url = "https://www.montgomeryschoolsmd.org/departments/foodserv/menus/elementary_lunch.aspx";
	$('#my_div').append('div').text(mc_elementary_lunch_url);

	var url = "http://anyorigin.com/go?url=" + encodeURIComponent(mc_elementary_lunch_url) + "&callback=?";
	$.get(url, function(response) {
	  console.log(response);
	});	  
}


