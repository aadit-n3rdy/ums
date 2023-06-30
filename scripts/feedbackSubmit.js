
function feedbackSubmit() {
	let ranges = document.getElementsByClassName("slider")
	let avg = 0
	for (range of ranges) {
		avg += parseFloat(range.value)
	}
	avg /= ranges.length
	console.log(avg)
	return confirm(`You have given an average rating of ${Math.round((avg+1)*50, 2)}%, would you like to submit?`)
}
