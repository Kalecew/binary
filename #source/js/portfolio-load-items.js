const readMoreBtn = document.querySelector('#readmore')
const filterItems = document.querySelectorAll('[data-filter]')

const countLoadImages = 6
let alreadyOutputImages = 0

function PortfolioItem(title, img, link, filter){
	this.title = title
	this.img = img
	this.link = link
	this.filter = filter
}
const portfolioItems = [ 
	new PortfolioItem('Keira', 'theme1', '#', 'web'),
	new PortfolioItem('SRK', 'theme2', '#', 'apps'),
	new PortfolioItem('EduPro', 'theme3', '#', 'other'),
	new PortfolioItem('EightyDays', 'theme4', '#', 'web'),
	new PortfolioItem('Lily', 'theme5', '#', 'web'),
	new PortfolioItem('Daisy', 'theme6', '#', 'apps'),
	new PortfolioItem('Nutritia', 'theme7', '#', 'apps'),
	new PortfolioItem('Techup', 'theme8', '#', 'other'),
	new PortfolioItem('themKantere1', 'theme9', '#', 'other'),
	new PortfolioItem('Moreno', 'theme10', '#', 'other'),
	new PortfolioItem('Homeswort', 'theme11', '#', 'other'),
	new PortfolioItem('Angel', 'theme12', '#', 'web')
] 





const applyFilter = (e) => {
	if (e != null) {
		const currentFilter = e.target
		filterItems.forEach(filter => {
			filter.classList.remove('filter__btn--active')
		})
		currentFilter.classList.add('filter__btn--active')
	}
	const currentFilter = document.querySelector('.filter__btn--active')
	const id = currentFilter.id		
	const images = document.querySelectorAll('.grid-portfolio__item')
	images.forEach(img => {
		if (id == 'all'){
			img.style.display = 'block'
		}else if (img.classList.contains('f_'+id)){
			img.style.display = 'block'				
		}else{
			img.style.display = 'none'
		}			
	})
}
const createListItem = item => { 
	return ` 
		<li class="grid-portfolio__item f_${item.filter}">
			<div class="grid-portfolio__img-wrap">
				<a class="wrap-link" href="${item.link}">
					<img class="grid-portfolio__img" src="files/portfolio/${item.img}.jpg" alt="${item.title}">
				</a>
			</div>
		</li>
	` 
} 
const loadImages = () => {
	const temp = []
	for (let i = 0; i < countLoadImages; i++) {
		if (alreadyOutputImages == portfolioItems.length){
			readMoreBtn.style.display = "none"
			break
		}
		temp.push(createListItem(portfolioItems[alreadyOutputImages]))
		alreadyOutputImages++
	}
	if (alreadyOutputImages == portfolioItems.length){
		readMoreBtn.style.display = "none"
	}
	const html = temp.join(' ') 
	document.querySelector('#list-grid-portfolio').innerHTML += html 
}
filterItems.forEach(filter => {
	filter.addEventListener('click', applyFilter)
})
readMoreBtn.addEventListener('click', loadImages)
readMoreBtn.addEventListener('click', () => applyFilter(null))
loadImages()