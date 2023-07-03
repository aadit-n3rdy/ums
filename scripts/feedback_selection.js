
function handleSemClick(evt) {
	let e = evt.currentTarget
	const txt = e.childNodes[1].innerText

    if(txt=="Dr. Viru Sahastrabuddhe") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    } else if(txt=="Albert Einstein") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    } else if(txt=="The Buddha") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    } else if(txt=="21 Savage") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    } else if(txt=="Jimmy Hendrix") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    } else if(txt=="Isaac Newton") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    } else if(txt=="Ezio") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    } else if(txt=="Thanos") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    }
	window.open(`feedback.html`, "frame")
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