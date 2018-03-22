document.addEventListener("DOMContentLoaded", (event) => {
	
	console.log(window.scrollY)
	window.addEventListener("scroll", (event) => {
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
		}else if(window.scrollY > 2701 && window.scrollY < 3078){ //set both contact and reviews to highlight since theyre close
			reviews.classList.add("set-color")
			contactUs.classList.add("set-color")

			aboutUs.classList.remove("set-color")
			ourPaper.classList.remove("set-color")
			theTeam.classList.remove("set-color")
		}
	})

})