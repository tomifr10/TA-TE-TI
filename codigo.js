let cajaprincipal = document.querySelector('.cajaGrande');
let array = [1,2,3,4,5,6,7,8,9];
console.log(cajaprincipal)
let caja = "";
function crearCaja(array) {
	let caja = "";

	array.map((box,index) => {
		caja += 
		`<div onclick='marca(${index})' class="caja" id=${index}></div>`;
		cajaprincipal.innerHTML = caja;
	})
}

crearCaja(array);
 
let caja0 = document.getElementById('0');
let caja1 = document.getElementById('1');
let caja2 = document.getElementById('2');
let caja3 = document.getElementById('3');
let caja4 = document.getElementById('4');
let caja5 = document.getElementById('5');
let caja6 = document.getElementById('6');
let caja7 = document.getElementById('7');
let caja8 = document.getElementById('8');
let ganador = false
let contador = 0;
let cajas = document.querySelectorAll('.caja')
let boton = document.querySelector('.boton');
let cartel = document.querySelector('.cartel');
let jugadorx = document.querySelector('.jugadorx');
let jugadoro = document.querySelector('.jugadoro');
let contadorx = 0;
let contadoro = 0;
jugadorx.innerHTML = `Jugador X: ${contadorx}`;
jugadoro.innerHTML = `Jugador O: ${contadoro}`;


console.log(caja0.getAttribute('value'))
function chequeo() {
	if (((caja0.getAttribute('value') === 'x') && (caja1.getAttribute('value') === 'x') && (caja2.getAttribute('value') === 'x')) || ((caja0.getAttribute('value') === 'o') && (caja1.getAttribute('value') === 'o') && (caja2.getAttribute('value') === 'o'))) {
		document.getElementById('cartel').innerHTML = `Ganador el jugador ${caja0.getAttribute('value')}`
		ganador = true;
		contador = 0;
		if(caja0.getAttribute('value') === 'x') {
			contadorx++;
			jugadorx.innerHTML = `Jugador X: ${contadorx}`;
		} else {
			console.log('masuno')
			contadoro++
			jugadoro.innerHTML = `Jugador O: ${contadoro}`;
		}
	} if (((caja0.getAttribute('value') === 'x') && (caja3.getAttribute('value') === 'x') && (caja6.getAttribute('value') === 'x')) || ((caja0.getAttribute('value') === 'o') && (caja3.getAttribute('value') === 'o') && (caja6.getAttribute('value') === 'o'))) {
		document.getElementById('cartel').innerHTML = `Ganador el jugador ${caja0.getAttribute('value')}`
		ganador = true;
		contador = 0
		if(caja0.getAttribute('value') === 'x') {
			contadorx++;
			jugadorx.innerHTML = `Jugador X: ${contadorx}`;
		} else {
			console.log('masuno')
			contadoro++
			jugadoro.innerHTML = `Jugador O: ${contadoro}`;
		}

	} if (((caja1.getAttribute('value') === 'x') && (caja4.getAttribute('value') === 'x') && (caja7.getAttribute('value') === 'x')) || ((caja1.getAttribute('value') === 'o') && (caja4.getAttribute('value') === 'o') && (caja7.getAttribute('value') === 'o'))) {
		document.getElementById('cartel').innerHTML = `Ganador el jugador ${caja1.getAttribute('value')}`
		ganador = true;
		contador = 0
		if(caja1.getAttribute('value') === 'x') {
			contadorx++;
			jugadorx.innerHTML = `Jugador X: ${contadorx}`;
		} else {
			console.log('masuno')
			contadoro++
			jugadoro.innerHTML = `Jugador O: ${contadoro}`;
		}

	} if (((caja2.getAttribute('value') === 'x') && (caja5.getAttribute('value') === 'x') && (caja8.getAttribute('value') === 'x')) || ((caja2.getAttribute('value') === 'o') && (caja5.getAttribute('value') === 'o') && (caja8.getAttribute('value') === 'o'))) {
		document.getElementById('cartel').innerHTML = `Ganador el jugador ${caja2.getAttribute('value')}`
		ganador = true;
		contador = 0
		if(caja2.getAttribute('value') === 'x') {
			contadorx++;
			jugadorx.innerHTML = `Jugador X: ${contadorx}`;
		} else {
			console.log('masuno')
			contadoro++
			jugadoro.innerHTML = `Jugador O: ${contadoro}`;
		}
		
	} if (((caja3.getAttribute('value') === 'x') && (caja4.getAttribute('value') === 'x') && (caja5.getAttribute('value') === 'x')) || ((caja3.getAttribute('value') === 'o') && (caja4.getAttribute('value') === 'o') && (caja5.getAttribute('value') === 'o'))) {
		document.getElementById('cartel').innerHTML = `Ganador el jugador ${caja3.getAttribute('value')}`
		ganador = true;
		contador = 0
		if(caja3.getAttribute('value') === 'x') {
			contadorx++;
			jugadorx.innerHTML = `Jugador X: ${contadorx}`;
		} else {
			console.log('masuno')
			contadoro++
			jugadoro.innerHTML = `Jugador O: ${contadoro}`;
		}
	} if (((caja6.getAttribute('value') === 'x') && (caja7.getAttribute('value') === 'x') && (caja8.getAttribute('value') === 'x')) || ((caja6.getAttribute('value') === 'o') && (caja7.getAttribute('value') === 'o') && (caja8.getAttribute('value') === 'o'))) {
		document.getElementById('cartel').innerHTML = `Ganador el jugador ${caja6.getAttribute('value')}`
		ganador = true;
		contador = 0
		if(caja6.getAttribute('value') === 'x') {
			contadorx++;
			jugadorx.innerHTML = `Jugador X: ${contadorx}`;
		} else {
			console.log('masuno')
			contadoro++
			jugadoro.innerHTML = `Jugador O: ${contadoro}`;
		}
		
	} if (((caja0.getAttribute('value') === 'x') && (caja4.getAttribute('value') === 'x') && (caja8.getAttribute('value') === 'x')) || ((caja0.getAttribute('value') === 'o') && (caja4.getAttribute('value') === 'o') && (caja8.getAttribute('value') === 'o'))) {
		document.getElementById('cartel').innerHTML = `Ganador el jugador ${caja0.getAttribute('value')}`
		ganador = true;
		contador = 0
		if(caja0.getAttribute('value') === 'x') {
			contadorx++;
			jugadorx.innerHTML = `Jugador X: ${contadorx}`;
		} else {
			console.log('masuno')
			contadoro++
			jugadoro.innerHTML = `Jugador O: ${contadoro}`;
		}
		
	} if (((caja2.getAttribute('value') === 'x') && (caja4.getAttribute('value') === 'x') && (caja6.getAttribute('value') === 'x')) || ((caja2.getAttribute('value') === 'o') && (caja4.getAttribute('value') === 'o') && (caja6.getAttribute('value') === 'o'))) {
		document.getElementById('cartel').innerHTML = `Ganador el jugador ${caja2.getAttribute('value')}`
		ganador = true;
		contador = 0
		if(caja2.getAttribute('value') === 'x') {
			contadorx++;
			jugadorx.innerHTML = `Jugador X: ${contadorx}`;
		} else {
			console.log('masuno')
			contadoro++
			jugadoro.innerHTML = `Jugador O: ${contadoro}`;
		}
		
	}
}

boton.onclick = ()=> {
	cajas.forEach(caja =>caja.setAttribute('value', 'p'));
	console.log(cajas)
	cajas.forEach(caja=>caja.innerHTML = "")
	cartel.innerHTML = ''
}
function marca(e) {
	let cajita = (document.getElementById(`${e}`))
	let valorcajita = (document.getElementById(`${e}`)).getAttribute('value')

	if(contador % 2 == 0) {
		console.log(cajita)
		if(valorcajita !== 'x' && valorcajita !== 'o') {
			cajita.innerHTML = 'x';
			cajita.setAttribute('value', 'x');
			console.log(cajita)
			contador++
			chequeo()
			console.log(contador)
		}
	} else { 
		if(valorcajita !== 'o' && valorcajita !== 'x') {
		(document.getElementById(`${e}`)).innerHTML = 'o';
		cajita.setAttribute('value', 'o');
		contador++
		chequeo()
		}
	}
}
