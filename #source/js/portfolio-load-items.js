const readMoreBtn = document.querySelector('#readmore')
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
const countLoadImages = 6
let alreadyOutputImages = 0

loadImages()
readMoreBtn.onclick = function(){
	loadImages()
	const currentFilter = document.querySelector('.link-filter--active')
	applyFilter(currentFilter)
}

function createListItem(item) { 
	return ` 
		<a class="img-wrap-portfolio f_${item.filter}" href="${item.link}">
			<img src="files/portfolio/${item.img}.jpg" class="preview-portfolio" alt="${item.title}">
		</a>
	` 
} 

// было актуально, когда выводились все элементы сразу
// const temp = portfolioItems.map(item => createListItem(item)) 
// const html = temp.join(' ') 
// document.querySelector('.grid-portfolio').innerHTML = html 

function loadImages(){
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
	document.querySelector('.grid-portfolio').innerHTML += html 
}
