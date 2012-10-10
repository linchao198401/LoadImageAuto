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
		pages = $("#pages").val();

		currentPageNumber = 1;

		function displayImage() {
			var pageNumber = currentPageNumber;
			if(pageNumber < 10) {
				var replacements = {
					"%PART_TWO%" : "00" + pageNumber
				};
			} else if (pageNumber < 100) {
				var replacements = {
					"%PART_TWO%" : "0" + pageNumber
				};
			} else {
				var replacements = {
					"%PART_TWO%" : "" + pageNumber
				};
			}
			var imageStr = replacedPartOneStr.replace(/%\w+%/g, function(all) {
				return replacements[all] || all;
			});
			console.log(imageStr);
			imageTemplate.clone().removeAttr("id").attr("src", imageStr).css({
				"display" : "inline-block"
			}).appendTo("#container");
			currentPageNumber++;
			if (currentPageNumber < pages) {
				setTimeout(displayImage, 400);
			};
		}

		setTimeout(displayImage, 400);

		var title = $("#title").val();
		top.document.title = title + season;
	})
});
