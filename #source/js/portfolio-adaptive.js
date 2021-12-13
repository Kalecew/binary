window.onload = function(){
	const allImages = document.querySelectorAll('.preview-portfolio')
	const gridPortfolio = document.querySelector('.grid-portfolio')
	// const minHeight = minHeightF()
	const minHeight = 330
	let k = 0

	if(allImages.length != 0){
		initHeightImgPortfolio()	
		window.onresize = function(){
			adaptPortfolio()
		}
	}
	

	function initHeightImgPortfolio(){			
		k = minHeight / allImages[0].offsetWidth
		adaptPortfolio()
	}
	// функция была актуальна для статичного количества элементов
	// function minHeightF(){	
	// 	const masHeights = []		
	// 	allImages.forEach(function(img){			
	// 		masHeights.push(img.offsetHeight)			
	// 	})
	// 	const result = Math.min(...masHeights)		
	// 	return result
	// }
	function adaptPortfolio(){	
		gridPortfolio.style.gridAutoRows = (allImages[0].offsetWidth * k) + "px"
	}
}
	
	

	
