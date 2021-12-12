const portfolioItems = [ 
	{name: 'theme1', img: 'theme1', filter: 'web'},
	{name: 'theme2', img: 'theme2', filter: 'apps'},
	{name: 'theme3', img: 'theme3', filter: 'other'},
	{name: 'theme4', img: 'theme4', filter: 'web'},
	{name: 'theme5', img: 'theme5', filter: 'web'},
	{name: 'theme6', img: 'theme6', filter: 'apps'},
	{name: 'theme1', img: 'theme1', filter: 'apps'},
	{name: 'theme1', img: 'theme1', filter: 'other'},
	{name: 'theme1', img: 'theme1', filter: 'web'}
] 
function createListItem(item) { 
	return ` 
		<a class="img-wrap-portfolio f_${item.filter}" href="#">
			<img src="files/portfolio/${item.img}.jpg" class="preview-portfolio" alt="${item.name}">
		</a>
	` 
} 
const temp = portfolioItems.map(item => createListItem(item)) 
const html = temp.join(' ') 
document.querySelector('.grid-portfolio').innerHTML = html 