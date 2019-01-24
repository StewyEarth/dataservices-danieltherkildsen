document.addEventListener("DOMContentLoaded",()=>{
	
	fetch("http://www.omdbapi.com/?apikey=9a3cc64a&t=cars&plot=full")
	.then( (response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data.Title)
	});

});