$(document).ready(function() {
  myFunction();
  getLunch();
});

function myFunction() {
  alert('hi');
  $('#my_div').text('hello');
}

function getLunch() {
	var mc_elementary_lunch_url = "https://www.montgomeryschoolsmd.org/departments/foodserv/menus/elementary_lunch.aspx";
	  $('#my_div').append('div').text(mc_elementary_lunch_url);
	  $.get(mc_elementary_lunch_url, function(response) {
  		console.log(response);
	  });

var name = "codemzy";
var url = "http://anyorigin.com/go?url=" + encodeURIComponent("https://genesis55.gihub.pages/") + name + "&callback=?";
$.get(url, function(response) {
  console.log(response);
});	  
}


