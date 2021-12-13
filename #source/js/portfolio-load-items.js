const readMoreBtn = document.querySelector('#readmore')
const portfolioItems = [ 
	{title: 'Keira', img: 'theme1', link:'#', filter: 'web'},
	{title: 'SRK', img: 'theme2', link:'#', filter: 'apps'},
	{title: 'EduPro', img: 'theme3', link:'#', filter: 'other'},
	{title: 'EightyDays', img: 'theme4', link:'#', filter: 'web'},
	{title: 'Lily', img: 'theme5', link:'#', filter: 'web'},
	{title: 'Daisy', img: 'theme6', link:'#', filter: 'apps'},
	{title: 'Nutritia', img: 'theme7', link:'#', filter: 'apps'},
	{title: 'Techup', img: 'theme8', link:'#', filter: 'other'},
	{title: 'themKantere1', img: 'theme9', link:'#', filter: 'other'},
	{title: 'Moreno', img: 'theme10', link:'#', filter: 'other'},
	{title: 'Homeswort', img: 'theme11', link:'#', filter: 'other'},
	{title: 'Angel', img: 'theme12', link:'#', filter: 'web'}
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
