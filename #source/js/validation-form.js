const form = document.querySelector('#form')
const btnSubmit = form.querySelector('#submit')
btnSubmit.onclick = function(){
	if (!form.checkValidity())
		form.classList.add('checked-invalid-form')
}