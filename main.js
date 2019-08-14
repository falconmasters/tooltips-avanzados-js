const icono = document.querySelector('#icono');
const tooltip = document.querySelector('#tooltip');

const calcularPosicionTooltip = () => {
	// Calculamos las coordenadas del icono.
	const x = icono.offsetLeft;
	const y = icono.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = tooltip.clientWidth;
	const altoTooltip = tooltip.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 2) + 15;
	const arriba = y - altoTooltip - 20;

	tooltip.style.left = `${izquierda}px`;
	tooltip.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip());
window.addEventListener('resize', () => calcularPosicionTooltip());

icono.addEventListener('mouseenter', () => {
	tooltip.classList.add('activo');
	calcularPosicionTooltip();
});

let timer;
icono.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip.classList.remove('activo');
	}, 500);
});

tooltip.addEventListener('mouseenter', () => clearTimeout(timer));
tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));