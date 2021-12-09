
	const allImages = document.querySelectorAll('.preview-portfolio')
	const gridPortfolio = document.querySelector('.grid-portfolio')
	let k = 0
	initHeightImgPortfolio()	
	window.onresize = function(){
		adaptivePortfolio()
	}

	function initHeightImgPortfolio(){
		const minHeight = minHeightF()			
		k = minHeight / allImages[0].offsetWidth
		adaptivePortfolio()
	}
	function minHeightF(){
		const masHeights = []		
		allImages.forEach(function(img){			
			masHeights.push(img.offsetHeight)			
		})
		const result = Math.min(...masHeights)		
		return result
	}
	function adaptivePortfolio(){
		gridPortfolio.style.gridAutoRows = (allImages[0].offsetWidth * k) + "px"
	}
