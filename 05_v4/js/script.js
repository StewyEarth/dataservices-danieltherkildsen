document.addEventListener("DOMContentLoaded",()=>{

	var loaderElem = document.querySelector(".loader");

	let characterUlElem = document.querySelector("#characterlist");
	let prevBtnElems = document.querySelectorAll("#prev");
	let nextBtnElems = document.querySelectorAll("#next");
	let currentpageElems = document.querySelectorAll("#currentpage");
	let currentPage = 1;
	let minPageCount = 1;
	let maxPageCount = 25;

	let pageParam = new URLSearchParams(window.location.search).get("page");

	if(pageParam == null){
		showpage(currentPage)
	}else if(isNaN(pageParam)){
		showpage(minPageCount)
	}else{
		restrictPageNumber();
		showpage(pageParam)
	}

	showpage(currentPage)

	function restrictPageNumber(){
		if (currentPage < minPageCount){
			currentPage = minPageCount;
		} else if (currentPage > maxPageCount){
			currentPage = maxPageCount;
		}
		if (pageParam > maxPageCount){
			pageParam = maxPageCount
		}else if (pageParam < minPageCount){
			pageParam = minPageCount
		}
	}

	//Prev page
	prevBtnElems.forEach(prevBtnElem => {
		prevBtnElem.addEventListener("click",()=>{
			currentPage--
			restrictPageNumber();
			showpage(currentPage)
		});
	});

	//Next page
	nextBtnElems.forEach(nextBtnElem => {
		nextBtnElem.addEventListener("click",()=>{
			currentPage++
			restrictPageNumber();
			showpage(currentPage)
		});
	});





	/**
	 * 
	 * @param {number} page - Shows api page of characters
	 */
	function showpage(page){
		loaderShow();
		currentPage = page;
		fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
		.then((response) =>{
			return response.json();
		})
		.then((data)=>{

			characterUlElem.innerHTML = ""

			currentpageElems.forEach(currentpageElem => {
				currentpageElem.innerHTML = `Page ${page}/${maxPageCount}`
			});
			
			data.results.forEach(character => {
				characterUlElem.innerHTML += `<li><img src="${character.image}"><div> ${character.name}<ul><li>Status: ${character.status}</li><li>Gender: ${character.gender}</li><li>Location: ${character.location.name}</li><li>Origin: ${character.origin.name}</li></ul></div></li>`

				loaderHidden();
				
			});
			
		});
	};

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

