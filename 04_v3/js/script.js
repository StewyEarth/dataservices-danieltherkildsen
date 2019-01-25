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
	let timersCount = [];

	let timer = setTimeout(()=>{
		console.log("#1");
		checktimer();
	},1500);
	timersCount.push(timer)

	timer = setTimeout(()=>{
		console.log("#2");
		checktimer();
	},500);
	timersCount.push(timer)

	timer = setTimeout(()=>{
		console.log("#3");
		checktimer();
	},2000);
	timersCount.push(timer)


	timer = setTimeout(()=>{
		console.log("#4");
		checktimer();
	},1000);
	timersCount.push(timer)


	function checktimer(){
		timersDone++
		if (timersDone == timersCount.length){
			console.log("Timers done")
		}
	}
});