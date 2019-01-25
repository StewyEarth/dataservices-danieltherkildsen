document.addEventListener("DOMContentLoaded",()=>{

	let characterUlElem = document.querySelector("#characterlist");
	let prevBtnElem = document.querySelector("#prev");
	let nextBtnElem = document.querySelector("#next");
	let currentpageElem = document.querySelector("#currentpage");
	let currentPage = 1;
	let minPageCount = 1;
	let maxPageCount = 25;

	let pageParam = new URLSearchParams(window.location.search).get("page");
	if(pageParam == null){
		showpage(currentPage)
	}else{
		if (pageParam > maxPageCount){
			pageParam = maxPageCount
		}
		showpage(pageParam)
	}

	showpage(currentPage)

	function restrictPageNumber(){
		if (currentPage < minPageCount){
			currentPage = minPageCount;
		} else if (currentPage > maxPageCount){
			currentPage = maxPageCount;
		}
	}

	prevBtnElem.addEventListener("click",()=>{
		currentPage--
		restrictPageNumber();
		showpage(currentPage)
	});

	nextBtnElem.addEventListener("click",()=>{
		currentPage++
		restrictPageNumber();
		showpage(currentPage)
	});



	function showpage(page){
		currentPage = page;
		fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
		.then((response) =>{
			return response.json();
		})
		.then((data)=>{
			characterUlElem.innerHTML = ""
			currentpageElem.innerHTML = `Page ${page}/${maxPageCount}`
			data.results.forEach(character => {
				characterUlElem.innerHTML += `<li><img src="${character.image}"><div> ${character.name}<ul><li>Status: ${character.status}</li><li>Gender: ${character.gender}</li><li>Location: ${character.location.name}</li><li>Origin: ${character.origin.name}</li></ul></div></li>`
				// console.log(character.name)
			});
			
		});
	};
});