
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

//code to change color scheme based on light and dark mode
function color() {
    if(JSON.parse(localStorage.getItem("color-mode"))=="dark") {
        document.documentElement.setAttribute("data-theme","dark");
    } else {
        document.documentElement.removeAttribute("data-theme","dark");
    }
}

setInterval(color, 0);