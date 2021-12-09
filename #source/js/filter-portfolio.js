const filterItems = document.querySelectorAll('.item-filter .link-filter')
const images = document.querySelectorAll('.img-wrap-portfolio')
filterItems.forEach(function(filter){
	filter.onclick = function(){		
		filterItems.forEach(function(filter){
			filter.classList.remove('link-filter--active')
		})
		this.classList.add('link-filter--active')
		const id = this.id		
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
})

