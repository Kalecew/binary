const filterItems = document.querySelectorAll('.item-filter .link-filter')
filterItems.forEach(function(filter){
	filter.onclick = function(){		
		applyFilter(this)
	}
})

function applyFilter(currentFilter){
	const images = document.querySelectorAll('.img-wrap-portfolio')
	filterItems.forEach(function(filter){
		filter.classList.remove('link-filter--active')
	})
	currentFilter.classList.add('link-filter--active')
	const id = currentFilter.id		
	images.forEach(function(img){
		if (id == 'all'){
			img.style.display = 'block'
		}else if (img.classList.contains('f_'+id)){
			img.style.display = 'block'				
		}else{
			img.style.display = 'none'
		}			
	})
}

