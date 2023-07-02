window.addEventListener("load", (function () {
	let bars = document.getElementsByClassName("progress-bar")
	for (let bar of bars) {
		let child = bar.getElementsByClassName("progress-text")[0]
		let num = parseInt(child.innerText)
		console.log(num)
		let bg = `radial-gradient(closest-side, var(--sidebar-color) 79%, transparent 80% 100%), conic-gradient(var(--progress-complete) ${num}%, var(--progress-left) 0)`
		bar.style.background = bg;
		console.log(bg);
	}
}
));

