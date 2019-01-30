document.addEventListener("DOMContentLoaded",()=>{

	let fetchUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
	let location = "Svendborg";
	let apiKey = "&appid=04c42d46d3d29b2cfe943da5a9d5e4c0"

	fetch(`data/svendborg.json`)
	.then((response) =>{
		return response.json();
	})
	.then((data)=>{
		
		console.log(parseInt(data.main.temp)- 273);
	})

});