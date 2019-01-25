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
	let timersCount = 0;
	setTimeout(()=>{
		console.log("#1");
		checktimer();
	},1500);
	timersCount++

	setTimeout(()=>{
		console.log("#2");
		checktimer();
	},500);
	timersCount++

	setTimeout(()=>{
		console.log("#3");
		checktimer();
	},2000);
	timersCount++

	setTimeout(()=>{
		console.log("#4");
		checktimer();
	},1000);
	timersCount++

	function checktimer(){
		timersDone++
		if (timersDone == timersCount){
			console.log("Timers done")
		}
	}
});