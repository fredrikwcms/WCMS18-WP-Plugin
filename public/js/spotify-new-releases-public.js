(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

// Prepare AJAX 
	$(document).ready(function() {
		$(".widget_spotify-new-releases .content").each(function(i, widget) {
			$.post(my_ajax_obj.ajax_url, {
				action: "spotify_new_releases__get"
			})
				.done(function(response) {
					let output = "";
					if (response) {
						output += "<h1>Album One</h1>";
						output += "<p>Artist: " + response.data["album_one"][0] + "</p>";
						output +=
							"<p>Album name: " + response.data["album_one"][2] + "</p>";
						output +=
							"<p>Album type: " + response.data["album_one"][1] + "</p>";
						output +=
							"<a href=" +
							response.data["album_one"][3] +
							"><img src=" +
							response.data["album_one"][4] +
							"></a><br>";
						output += "<hr>";
						output += "<h1>Album Two</h1>";
						output += "<p>Artist: " + response.data["album_two"][0] + "</p>";
						output +=
							"<p>Album name: " + response.data["album_two"][2] + "</p>";
						output +=
							"<p>Album type: " + response.data["album_two"][1] + "</p>";
						output +=
							"<a href=" +
							response.data["album_two"][3] +
							"><img src=" +
							response.data["album_two"][4] +
							"></a><br>";
						output += "<hr>";
						output += "<h1>Album Three</h1>";
						output += "<p>Artist: " + response.data["album_three"][0] + "</p>";
						output +=
							"<p>Album name: " + response.data["album_three"][2] + "</p>";
						output +=
							"<p>Album type: " + response.data["album_three"][1] + "</p>";
						output +=
							"<a href=" +
							response.data["album_three"][3] +
							"><img src=" +
							response.data["album_three"][4] +
							"></a>";
					} else {
						if (response.data == 404) {
							output += "Could not find new releases";
						} else {
							output += "Something went wrong.";
						}
					}
					$(widget).html(output);
				})
				.fail(function(error) {
					let output = "Unknown error";
					if (error.status == 404) {
						output = "Could not find new releases";
					}
					$(widget).html(output);
				});
		});
	});
	
})( jQuery );

