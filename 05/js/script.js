document.addEventListener("DOMContentLoaded",()=>{

	let fetchCount = 0;
	let fetchesDone = 0;
	let rickandmortycharacterspage1;
	let rickandmortycharacterspage2;
	let characterUlElem = document.querySelector("#characterlist");


	fetch("https://rickandmortyapi.com/api/character")
	.then((response) =>{
		return response.json();
	})
	.then((data)=>{
		rickandmortycharacterspage1 = data.results;
		checkFetches();
	})
	fetchCount++;

	fetch("https://rickandmortyapi.com/api/character/?page=2")
	.then((response) =>{
		return response.json();
	})
	.then((data)=>{
		rickandmortycharacterspage2 = data.results;
		checkFetches();
	})
	fetchCount++;


	function checkFetches(){
		fetchesDone++;
		if (fetchesDone == fetchCount){
			console.log(rickandmortycharacterspage1)
			rickandmortycharacterspage1.forEach(character => {
				characterUlElem.innerHTML += `<li><img src="${character.image}"><div> ${character.name}<ul><li>Status: ${character.status}</li><li>Gender: ${character.gender}</li><li>Location: ${character.location.name}</li><li>Origin: ${character.origin.name}</li></ul></div></li>`
				// console.log(character.name)
			});
			
			rickandmortycharacterspage2.forEach(character => {
				characterUlElem.innerHTML += `<li><img src="${character.image}"><div> ${character.name}<ul><li>Status: ${character.status}</li><li>Gender: ${character.gender}</li><li>Location: ${character.location.name}</li><li>Origin: ${character.origin.name}</li></ul></div></li>`
				// console.log(character.name)
			});
		}
	}
});