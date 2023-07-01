function feedbackSubmit() {
	let ranges = document.getElementsByClassName("slider")
	let avg = 0
	for (let range of ranges) {
		avg += parseFloat(range.value)
	}
	avg /= ranges.length
	console.log(avg)
	return confirm(`You have given an average rating of ${Math.round((avg+1)*50, 2)}%, would you like to submit?`)
}

const feed_title = localStorage.getItem('click')

document.getElementById("page-header").innerHTML = "Teacher Feedback - "+JSON.parse(feed_title)