// Frase da Página Inicial
let frase = document.getElementById('frase');
let autor = document.getElementById('autor');

frase.addEventListener('mouseover', () => {
    autor.classList.add('block');
});

frase.addEventListener('mouseout', () => {
    autor.classList.remove('block');
});
// Fim de Frase da Página Inicial

// Relógio Digital
let digital_h = document.querySelector('.digital .h');
let digital_m = document.querySelector('.digital .m');
let digital_s = document.querySelector('.digital .s');
let cumprimen = document.querySelector('.cumprimen');

function updateClock() {
	let now    = new Date();
	let hour   = now.getHours();
	let minute = now.getMinutes();
	let second = now.getSeconds();

	digital_h.innerHTML = `${fixZero(hour)}`;
	digital_m.innerHTML = `${fixZero(minute)}`;
	digital_s.innerHTML = `${fixZero(second)}`;

    if (hour < 12) {
        cumprimen.innerHTML = 'Bom dia';
    } else if (hour > 12 && hour < 18) {
        cumprimen.innerHTML = 'Boa tarde';
    } else {
        cumprimen.innerHTML = 'Boa noite';
    }
}

function fixZero(time) {
	return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();
// Fim de Relógio Digital

// Verifica se input está preenchido
// let inputName = document.getElementById('nome');
// let aviso = document.getElementById('aviso');

// if (inputName == '') {
//     aviso.style.display = 'block';
// }
// Fim de Verifica se input está preenchido