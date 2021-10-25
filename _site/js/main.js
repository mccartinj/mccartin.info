

$(document).ready(function(){
	sort_projects();
	show_img();
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

function show_img() {
	$("ul.post-list li").hover(function(event){
		console.log(event.clientY+", "+event.clientX);
		var $ftimg = $(this).find(".ftimg");
		var imgheight = $ftimg.height();
		var imgwidth = $ftimg.width();
		$ftimg.addClass("activated").css({display:"block",top:event.pageY-imgheight-10,left:event.pageX});

	}, function(event){
		console.log('end hovering');
		$(".ftimg").removeClass("activated").fadeOut(200).css({display:"none"});

	}
	);

	$("ul.post-list li").mousemove(function(event){
		var $active_image = $(".ftimg.activated");
		var imgheight = $active_image.height();
		var imgwidth = $active_image.width();
		console.log(imgheight);
		$active_image.css({top:event.pageY-imgheight-10,left:event.pageX});
	});
	
}