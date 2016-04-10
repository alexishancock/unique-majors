$(document).ready( function() {

	 $.getJSON("javascripts/majors.json", function (data) {

	 	$( ".choose-a-major" ).click( function( event ) {

	 		$( ".majors-listed" ).empty();

				var random_num   = Math.floor( ( Math.random() * 39 ) + 1 );
				var degree_name  = data[random_num]['Degree Name'];
				var degree_field = data[random_num]['Category'];
				var degree_type  = data[random_num]['Degree Type'];
				var degree_link  = data[random_num]['Link'];

				var html = "<li id='" +  "field-" + random_num + "'>Field: " + degree_field + "</li>";
					html += "<li id='" +  "name-" + random_num + "'>Name: " + degree_name + "</li>";
					html += "<li id='" +  "degree" + random_num + "'>Degree Type: " + degree_type + "</li>";
					html += "<a target=" + '_blank' + " href=" + degree_link + " id=" +  random_num + ">Link: " + degree_link + "</a>";

		 	$( ".majors-listed" ).append( html );
		});
	});
});