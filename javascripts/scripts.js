// register sw.js
$(document).ready( function() {

	var url = 'https://spreadsheets.google.com/feeds/list/1FHeOQKhKx0ywdUHv-tp1cL1Y__0QIIINX00PCERvPtY/od6/public/basic?alt=json';

	if ('caches' in window) {
		caches.open('spreadsheets').then(function(cache) {
		  cache.add(url).then(function() {
		    console.log('successful cache');
		  });
		});

		caches.match(url).then(function(response) {
			if (response) {
				response.json().then(function(json) {
					console.log('cache used');
					updateEntry(json);
				});
			}
		});
	} else {
		$.getJSON("https://spreadsheets.google.com/feeds/list/1FHeOQKhKx0ywdUHv-tp1cL1Y__0QIIINX00PCERvPtY/od6/public/basic?alt=json", function(data) {
			console.log('request used');
			updateEntry(data);
		});
	}

	function updateEntry(data){

		console.log('data updated');

	   	$( ".choose-a-major" ).click( function( event ) {

	   		$( ".majors-listed" ).empty();

   			var entries = data.feed.entry.length;
   			var random_num = Math.floor( ( Math.random() * entries ) );
  			var content = data.feed.entry[random_num]['content']['$t'].split(',');

  			var degree_name  = data.feed.entry[random_num]['title']['$t'];
  			var degree_field = content[0].replace('category: ', '');
  			var degree_type  = content[1].replace(' degreetype: ', '');
  			var degree_link  = content[2].replace(' link: ', '');

  			var html = "<li id='" +  "field-" + random_num + "'>Field: " + degree_field + "</li>";
  				html += "<li id='" +  "name-" + random_num + "'>Name: " + degree_name + "</li>";
  				html += "<li id='" +  "degree" + random_num + "'>Degree Type: " + degree_type + "</li>";
  				html += "<a target=" + '_blank' + " href=" + degree_link + " id=" +  random_num + ">Link: " + degree_link + "</a>";

	  	 	$( ".majors-listed" ).append( html );
	  	});

	}
});