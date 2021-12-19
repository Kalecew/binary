window.onload = function(){
	const allImages = document.querySelectorAll('.preview-portfolio')
	const gridPortfolio = document.querySelector('.grid-portfolio')
	// const minHeight = minHeightF()
	const maxHeight = 330
	const maxWidth = 538
	let k = 0

	if(allImages.length != 0){
		initHeightImgPortfolio()	
		window.onresize = function(){
			adaptPortfolio()
		}
	}
	

	function initHeightImgPortfolio(){			
		k = maxHeight / maxWidth
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
		gridPortfolio.style.gridAutoRows = (allImages[0].width * k) + "px"
	}
}
	
	

	
