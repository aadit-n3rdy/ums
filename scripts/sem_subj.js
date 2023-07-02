function handleSubjectClick(evt) {
	let e = evt.currentTarget
	const txt = e.childNodes[1].innerText
	const val = txt.toLowerCase()

	localStorage.setItem('subject',JSON.stringify(val));

	window.open(`../subjects/${path}/${val}.html`, "frame")
}

window.addEventListener("load", function() {
	let subjs = document.getElementsByClassName("subj-container")
	for (let subj of subjs) {
		subj.addEventListener("click", handleSubjectClick)
	}
})

var path = window.location.pathname
path = path.split("/").pop()
path = path.split(".")[0]

//code to change color scheme based on light and dark mode
function color() {
    if(JSON.parse(localStorage.getItem("color-mode"))=="dark") {
        document.documentElement.setAttribute("data-theme","dark");
    } else {
        document.documentElement.removeAttribute("data-theme","dark");
    }
}

setInterval(color, 0);