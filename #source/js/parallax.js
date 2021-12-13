const firstScreen = document.querySelector('#first-screen')
window.onscroll = function(){
	const scrollTopBg = document.documentElement.scrollTop / 2
	firstScreen.style.backgroundPosition = "center "+scrollTopBg+"px"
}