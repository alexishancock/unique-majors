$(document).ready(function() {

	function getMajors( ) {
	    return $.getJSON("javascripts/majors.json").then(function (data) {
	        return data.items;
	    });
	}

	getMajors().done(function (items) {
	    console.log(items);
	});

});