document.addEventListener("DOMContentLoaded", (event) => {
	let menuJump = document.querySelectorAll("change-color")
	menuJump.addEventListener("onclick", (event) => {
		if(menuJump.value === "About Us"){
			window.scroll({
				top: 0, //location in px
				left: 0,
				behavior: "smooth"
			})
		}else if(menuJump.value === "Reviews"){
			window.scroll({
				top: 0, 
				left: 0,
				behavior: "smooth"
			})
		}else if(menuJump.value === "The Team"){
			window.scroll({
				top: 0, 
				left: 0,
				behavior: "smooth"
			})
		}else if(menuJump.value === "Contact Us"){
			window.scroll({
				top: 0, 
				left: 0,
				behavior: "smooth"
			})
		}
	})
})