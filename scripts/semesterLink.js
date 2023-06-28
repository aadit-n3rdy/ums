
function handleSemClick(evt) {
	let e = evt.currentTarget
	const txt = e.childNodes[1].innerText
	const val = txt.split(" ")[1].toLowerCase()
	window.open(`semesters/sem_${val}.html`, "frame")
}

window.addEventListener("load", function() {
	let sems = document.getElementsByClassName("sem-container")
	for (let sem of sems) {
		sem.addEventListener("click", handleSemClick)
	}
})
