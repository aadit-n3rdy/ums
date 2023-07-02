var minchars = 0
var minnum = 0
var minsym = 0
var mustmatch = 0

var curpass = 0
var confirmpass = 0
var newpass = 0

window.addEventListener("load", (function() {

	minchars = document.getElementById("minchars")
	minnum = document.getElementById("minnum")
	minsym = document.getElementById("minsym")
	mustmatch = document.getElementById("mustmatch")

	curpass = document.getElementById("curpass");
	confirmpass = document.getElementById("confirmpass");
	newpass = document.getElementById("newpass");

	confirmpass.addEventListener("keyup", verifyConfirmPass)
	newpass.addEventListener("keyup", verifyNewPass)
}));

function setVerified(obj, verified) {
	console.log(`Setting ${obj.id} verified status to ${verified}`)
	if (verified) {
		obj.classList.remove("unverified")
		obj.classList.add("verified")
	} else {
		obj.classList.remove("verified")
		obj.classList.add("unverified")
	}
}

function verifyNewPass() {
	setVerified(minchars, newpass.value.length >= 8)
	setVerified(minnum, /.*[0-9].*/.test(newpass.value))
	setVerified(minsym, /.*[^0-9A-Za-z\s].*/.test(newpass.value))
}

function verifyConfirmPass() {
	setVerified(mustmatch, confirmpass.value == newpass.value)
}

//code to change color scheme based on light and dark mode
function color() {
    if(JSON.parse(localStorage.getItem("color-mode"))=="dark") {
        document.documentElement.setAttribute("data-theme","dark");
    } else {
        document.documentElement.removeAttribute("data-theme","dark");
    }
}

setInterval(color, 0);
