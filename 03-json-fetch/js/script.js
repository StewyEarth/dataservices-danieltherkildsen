document.addEventListener("DOMContentLoaded",()=>{

	let filmInfoElem = document.querySelector("#filminfo");

	let buttonContainerElem = document.querySelector("div");
	
	buttonContainerElem.addEventListener("click",(event) =>{
		if (event.target.tagName == "BUTTON"){
			getinfo(event.target.getAttribute("data"))
		}
	})

	getinfo("shrek")

		function getinfo(title){
			fetch(`http://www.omdbapi.com/?apikey=9a3cc64a&t=${title}&plot=full`)
			.then( (response) => {
				return response.json();
			})
			.then((data) => { // Her er data klar til kodning
				filmInfoElem.innerHTML = `<strong>Title:</strong> ${data.Title}<br> <strong>Released:</strong> ${data.Released}<br><hr><strong>Ratings</strong><br><strong> Imdb</strong> score: ${data.imdbRating}<br>`
				data.Ratings.forEach(rating => {
					filmInfoElem.innerHTML += `<strong>${rating.Source}</strong>, Score: ${rating.Value}<br>`
				});
				filmInfoElem.innerHTML += `<hr><strong>Description:</strong> ${data.Plot}`
		
			});
		}
});