var bt1 = document.querySelector('.bx.bx-rectangle');
var contenedor = document.querySelector('.contenedor2');



bt1.addEventListener('click', ()=>{ /*creamos un evento de click en hamburger*/
	contenedor.classList.toggle('activado') /*que se agregue o quite una clase con toggle*/
})



var imagen = document.querySelector('.imagen');
var redes = document.querySelector('.redes-sociales');



imagen.addEventListener('mouseenter', ()=>{ 
	redes.classList.toggle('mostrar') /*que se agregue o quite una clase con toggle*/
})

imagen.addEventListener('mouseout', ()=>{ /*creamos un evento de click en hamburger*/
	redes.classList.toggle('mostrar') /*que se agregue o quite una clase con toggle*/
})



var imagen2 = document.querySelector('.imagen2');
var redes2 = document.querySelector('.redes-sociales2');


console.log(imagen2);
console.log(redes2);

imagen2.addEventListener('mouseenter', ()=>{ 
	redes2.classList.toggle('mostrar') /*que se agregue o quite una clase con toggle*/
})

imagen2.addEventListener('mouseout', ()=>{ /*creamos un evento de click en hamburger*/
	redes2.classList.toggle('mostrar') /*que se agregue o quite una clase con toggle*/
})

