document.addEventListener("DOMContentLoaded",()=>{

	// setTimeout(()=>{
	// 	console.log("Timeout 1")
	// 	setTimeout(()=>{
	// 		console.log("Timeout 2")
	// 		setTimeout(()=>{
	// 			console.log("Timeout 3")
	// 		},2000)
	// 	},500)
	// },3000)

	let timersDone = 0;
	setTimeout(()=>{
		console.log("#1");
		checktimer();
	},1500);

	setTimeout(()=>{
		console.log("#2");
		checktimer();
	},500);

	setTimeout(()=>{
		console.log("#3");
		checktimer();
	},2000);


	function checktimer(){
		timersDone++
		if (timersDone == 3){
			console.log("Timers done")
		}
	}
});