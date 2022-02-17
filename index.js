let open = document.getElementById("open");

let model = document.getElementById("modal");
open.addEventListener("click", function () {
	model.style.display = "block";
})
let hide = document.querySelectorAll(".hide")

for (var i = 0; i < hide.length; i++) {
	hide[i].addEventListener("click", function () {
		model.style.display = "none";
	})
}


window.onclick = function (e) {
	if (e.target == model) {
		model.style.display = "none";
	}
}

open.addEventListener("keydown", function (e) {
	console.log(e)
	if (e.key === 'Escape') {
		model.style.display = "none";
	}
})