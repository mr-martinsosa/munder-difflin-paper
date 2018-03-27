document.body.classList.add("fade-out")

document.addEventListener("DOMContentLoaded", (event) => {
	window.addEventListener("mousemove", (event) => {
		document.body.classList.remove("fade-out")
	})
	window.addEventListener("scroll", (event) => {
		let grabNav = document.querySelectorAll(".change-color")
		
		let aboutUs = grabNav[1]
		let ourPaper = grabNav[2]
		let theTeam = grabNav[3]
		let reviews = grabNav[4]
		let contactUs = grabNav[5]

		let grabSection = document.querySelectorAll("section")

		let aboutSection = grabSection[0]
		let paperSection = grabSection[1]
		let teamSection = grabSection[2]
		let reviewsSection = grabSection[3]
		console.log(reviewsSection)
		if(window.scrollY < 130){
			aboutUs.classList.add("set-color")

			ourPaper.classList.remove("set-color")
			theTeam.classList.remove("set-color")
			reviews.classList.remove("set-color")
			contactUs.classList.remove("set-color")

			aboutSection.classList.add("fade-in")

			paperSection.classList.remove("fade-in")
			teamSection.classList.remove("fade-in")
			reviewsSection.classList.remove("fade-in")
		}else if(window.scrollY > 131 && window.scrollY < 1799){
			ourPaper.classList.add("set-color")

			aboutUs.classList.remove("set-color")
			theTeam.classList.remove("set-color")
			reviews.classList.remove("set-color")
			contactUs.classList.remove("set-color")

			paperSection.classList.add("fade-in")

			aboutSection.classList.remove("fade-in")
			teamSection.classList.remove("fade-in")
			reviewsSection.classList.remove("fade-in")
		}else if(window.scrollY > 1800 && window.scrollY < 2700){
			theTeam.classList.add("set-color")

			aboutUs.classList.remove("set-color")
			ourPaper.classList.remove("set-color")
			reviews.classList.remove("set-color")
			contactUs.classList.remove("set-color")

			teamSection.classList.add("fade-in")

			aboutSection.classList.remove("fade-in")
			paperSection.classList.remove("fade-in")
			reviewsSection.classList.remove("fade-in")
		}else if(window.scrollY > 2701 && window.scrollY < 3078){ //set both contact and reviews to highlight since theyre close
			reviews.classList.add("set-color")
			contactUs.classList.add("set-color")

			aboutUs.classList.remove("set-color")
			ourPaper.classList.remove("set-color")
			theTeam.classList.remove("set-color")

			reviewsSection.classList.add("fade-in")

			aboutSection.classList.remove("fade-in")
			paperSection.classList.remove("fade-in")
			teamSection.classList.remove("fade-in")
		}
	})

})