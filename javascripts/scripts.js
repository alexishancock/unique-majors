$(document).ready(function() {
	 $.getJSON("https://api.myjson.com/bins/1drql", function (data) {

	 	$(".choose-a-major").click(function(event) {
	 		$(".majors-listed").empty();
				var random_num   = Math.floor((Math.random() * 39) + 1);
				var degree_name  = data[random_num]['Degree Name'];
				var degree_field = data[random_num]['Category'];
				var degree_type  = data[random_num]['Degree Type'];
				var degree_link  = data[random_num]['Link'];

				var html = "<li id='" +  random_num + "'>Field: " + degree_field + "</li>";
					html += "<li id='" +  random_num + "'>Name: " + degree_name + "</li>";
					html += "<li id='" +  random_num + "'>Degree Type: " + degree_type + "</li>";
					html += "<a target=" + '_blank' + " href=" + degree_link + " id=" +  random_num + ">Link: " + degree_link + "</a>";

		 	$(".majors-listed").append(html);
		});
	});
});