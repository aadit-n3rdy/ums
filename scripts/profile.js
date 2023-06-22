var test = parent.document.getElementById("main_body");
var class_state = test.classList.contains("dark");
var body = document.getElementById("profile_body");

const options = {
    attributes: true
}

function callback(mutationList, observer) {
    mutationList.forEach(function(mutation)  {
        if(mutation.target.classList.contains("dark")) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    })
}

var observer = new MutationObserver(callback);

observer.observe(test, options)