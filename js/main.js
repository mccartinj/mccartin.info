

$(document).ready(function(){
	sort_projects();
})

function sort_projects(){
	$(".sorter").change(function(){
		var selection = $(".sorter option:selected").text();

		if (selection == "all tags") {
			$("ul.post-list li").fadeIn(200).show();
		} else {
			var relevant_projects = $("ul.post-list li."+selection);
			var irrelevant_projects = $("ul.post-list li:not(."+selection+")");
			
			relevant_projects.fadeIn(200).show();
			irrelevant_projects.fadeOut(200).hide();
		}


		
	})
}