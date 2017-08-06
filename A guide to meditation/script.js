var page = 0;
var pages = document.querySelectorAll(".page");


loadPage(page);

document.getElementById("next").addEventListener("click", function(){
	if (page<pages.length-1) {
	page++;
	loadPage(page);
	}
});

document.getElementById("previous").addEventListener("click", function(){
	if (page > 0) {
	page--;
	loadPage(page);
	}
});

document.getElementById("home").addEventListener("click", function(){
	page = 0;
	loadPage(page);
});



function loadPage(pageNum) {
	for(var i = 0; i<pages.length; i++) {
		if(i===pageNum){
			pages[i].classList.remove("hide");
		} else {
			pages[i].classList.add("hide");
		}
	}
}
