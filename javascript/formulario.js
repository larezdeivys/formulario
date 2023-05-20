
document.querySelector('.campos').addEventListener('click', (e) => {
	let si = 'no'
	const inputs = document.querySelectorAll('input')
	// console.log(inputs[0])
	if(e.target.classList.contains('inscribir')){
		for(let i = 0; i < inputs.length; i++){
			if (inputs[i].value === '') {
				si = 'si'
			}
		}
		if (si === 'si'){
			alert('rellene todos los campos')
		}
		else if(inputs[2].value.length < 7 || inputs[2].value.length > 8){
			alert('El número de cédula no es válido')
		}
		// else if(parseInt(inputs[3].value) < 16 || parseInt(inputs[3].value) > 60){
		// 	alert('Su edad no esta dentro del rango permitido')
		// }
		else {
			const nombre = document.querySelector('#nombre').value
			document.querySelector('.nombre').innerHTML = nombre
			const hora = document.querySelector('#hora').value
			document.querySelector('.hora').innerHTML = hora
			const cursos = document.querySelector('#cursos').value
			document.querySelector('.cursos').innerHTML = cursos

			document.querySelector('.seccion').innerHTML = Math.floor(Math.random() * 100 + 1)

			document.querySelector('.campos').classList.add('campost')
			document.querySelector('.enviar').style.display = 'block'
		}
	}
})
// document.querySelector('.enciar').addEventListener('click', (e) => {
// 	if(e.target.classList.contains('env')){
// 	e.defaultPrevented
// 	}
// })