document.addEventListener("DOMContentLoaded",()=>{

	var loaderElem = document.querySelector(".loader");
	var buttonElem = document.querySelector("button");
	
	buttonElem.addEventListener("click", ()=>{
		loaderShow();
		setTimeout(()=>{
			loaderHidden()
		},2000)
	})

	function loaderHidden(){
		loaderElem.classList.add("fadeout");
	}

	function loaderShow(){
		scroll(0,0);
		loaderElem.style.display = "flex";
	}

	loaderElem.addEventListener("transitionend",function(){
		loaderElem.style.display = "none";
		loaderElem.classList.remove("fadeout");
	});
});