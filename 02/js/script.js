document.addEventListener("DOMContentLoaded",()=>{
	
	fetch("data/solsystem.json")
	.then( (response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data.maelkevejen.voresSolsytem.planeter.planeterMedMaaner.neptun.treStoerstemaaner[2])
	});

});