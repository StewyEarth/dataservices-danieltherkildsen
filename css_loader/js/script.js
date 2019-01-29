document.addEventListener("DOMContentLoaded",()=>{

	var loader = document.querySelector(".loader");
	var buttonElem = document.querySelector("button");
	
	buttonElem.addEventListener("click", ()=>{
		loaderShow();
		setTimeout(()=>{
			loaderHidden()
		},2000)
	})

	function loaderHidden(){
		loader.classList.add("fadeout");
	}

	function loaderShow(){
		scroll(0,0);
		loader.style.display = "flex";
	}

	loader.addEventListener("transitionend",function(){
		loader.style.display = "none";
		loader.classList.remove("fadeout");
	});
});