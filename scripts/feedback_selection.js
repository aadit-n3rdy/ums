
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
    } else if(txt=="Dog") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    } else if(txt=="???") {
        const name = JSON.stringify(txt);
        localStorage.setItem('click',name);
    } else if(txt=="ș̶̢͕̻̦̳͇̥̜͓͚̅̽̌͐̀̍͊̾͛̍̐͗́̎a̸͚͎̤̬̤̣͒̂͊̈́͛͠v̷̙̲̩̲̝͉̖̱̝̗͔͚̮̜̘̽̾͝e̷̳̳̤͕̎̽̆̀͑̆͑͊̐́̉ ̶̰̺̟̭͍͈͙̱̜̀̉̀̇̅͋̔̈́̃̀̉͝ͅḿ̷̧̼̮̳͇̰̞̻͖͍̜̲̩̬̼͌͂̒̈́͘͠e̵̙͉͎͎͗̽") {
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
