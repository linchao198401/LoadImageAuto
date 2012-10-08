$(function() {
	$("#title").blur(function() {
		var season = $("#season").val();
		var title = $("#title").val();
		top.document.title = title + season;
	})

	$("#loadButton").click(function() {
		$("#container").empty();

		var imageTemplate = $("#imageTemplate");
		var str = $("#imgURL").val();
		// http://1.kangdm.com/comic_img/GHI/50/%PART_ONE%/Naruto0%PART_ONE%-%PART_TWO%.jpg

		var season = $("#season").val();
		var replacements = {
			"%PART_ONE%" : season
		};
		var replacedPartOneStr = str.replace(/%\w+%/g, function(all) {
			return replacements[all] || all;
		});
		var pages = $("#pages").val();
		console.log(pages);
		for(var partTwo = 0; partTwo < pages; partTwo++) {
			var pageNumber = partTwo + 1;
			if(pageNumber < 10) {
				var replacements = {
					"%PART_TWO%" : "00" + pageNumber
				};
			} else {
				var replacements = {
					"%PART_TWO%" : "0" + pageNumber
				};
			}
			var imageStr = replacedPartOneStr.replace(/%\w+%/g, function(all) {
				return replacements[all] || all;
			});
			console.log(imageStr);
			imageTemplate.clone().removeAttr("id").attr("src", imageStr).css({
				"display" : "inline-block"
			}).appendTo("#container");
		}
		var title = $("#title").val();
		top.document.title = title + season;
	})
});
