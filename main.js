// document.addEventListener("DOMContentLoaded", (event) => {
// 	let menuJump = document.querySelectorAll("change-color")
// 	menuJump.addEventListener("onclick", (event) => {
// 		if(menuJump.value === "About Us"){
// 			window.scroll({
// 				top: 0, //location in px
// 				left: 0,
// 				behavior: "smooth"
// 			})
// 		}else if(menuJump.value === "Reviews"){
// 			window.scroll({
// 				top: 0, 
// 				left: 0,
// 				behavior: "smooth"
// 			})
// 		}else if(menuJump.value === "The Team"){
// 			window.scroll({
// 				top: 0, 
// 				left: 0,
// 				behavior: "smooth"
// 			})
// 		}else if(menuJump.value === "Contact Us"){
// 			window.scroll({
// 				top: 0, 
// 				left: 0,
// 				behavior: "smooth"
// 			})
// 		}
// 	})
// })

document.addEventListener("DOMContentLoaded", (event) => {
	
	console.log(window.scrollY)
	window.addEventListener("scroll", (event) => {
		console.log(window.scrollY)
		let grabNav = document.querySelectorAll(".change-color")
		
		let aboutUs = grabNav[1]
		let ourPaper = grabNav[2]
		let theTeam = grabNav[3]
		let reviews = grabNav[4]
		let contactUs = grabNav[5]

		if(window.scrollY < 200){
			aboutUs.classList.add("set-color")

			ourPaper.classList.remove("set-color")
			theTeam.classList.remove("set-color")
			reviews.classList.remove("set-color")
			contactUs.classList.remove("set-color")
		}else if(window.scrollY > 131 && window.scrollY < 1799){
			ourPaper.classList.add("set-color")

			aboutUs.classList.remove("set-color")
			theTeam.classList.remove("set-color")
			reviews.classList.remove("set-color")
			contactUs.classList.remove("set-color")
		}else if(window.scrollY > 1800 && window.scrollY < 2700){
			theTeam.classList.add("set-color")

			aboutUs.classList.remove("set-color")
			ourPaper.classList.remove("set-color")
			reviews.classList.remove("set-color")
			contactUs.classList.remove("set-color")
		}else if(window.scrollY > 2701 && window.scrollY < 3078){
			reviews.classList.add("set-color")

			aboutUs.classList.remove("set-color")
			ourPaper.classList.remove("set-color")
			theTeam.classList.remove("set-color")
			contactUs.classList.remove("set-color")
		}else if(window.scrollY > 3079){
			contactUs.classList.add("set-color")

			aboutUs.classList.remove("set-color")
			ourPaper.classList.remove("set-color")
			theTeam.classList.remove("set-color")
			reviews.classList.remove("set-color")
		}//else {
		// 	aboutUs.classList.remove("set-color")
		// 	ourPaper.classList.remove("set-color")
		// 	theTeam.classList.remove("set-color")
		// 	reviews.classList.remove("set-color")
		// 	contactUs.classList.remove("set-color")
		// }
	})

})