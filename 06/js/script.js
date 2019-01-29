document.addEventListener("DOMContentLoaded",()=>{

	let fetchCount = 0;
	let fetchesDone = 0;
	let rickandmortycharacterspage1;
	let rickandmortycharacterspage2;
	let characterUlElem = document.querySelector("#characterlist");


	fetch("data/rickandmortyapipage1.json")
	.then((response) =>{
		return response.json();
	})
	.then((data)=>{
		rickandmortycharacterspage1 = data.results;
		checkFetches();
	})
	fetchCount++;

	fetch("data/rickandmortyapipage2.json")
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