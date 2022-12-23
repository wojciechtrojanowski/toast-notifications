const btnSuccess = document.querySelector('.success');
const btnError = document.querySelector('.error');
const btnWarning = document.querySelector('.warning');
const btnInfo = document.querySelector('.info');
const popupSuccess = document.querySelector('.popup-success');
const popupError = document.querySelector('.popup-error');
const popupWarning = document.querySelector('.popup-warning');
const popupInfo = document.querySelector('.popup-info');
const close = document.querySelectorAll('.close');
const bar = document.querySelector('.bar');

close.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.target.closest('.popup').classList.remove('show-popup');
		e.target.parentElement.parentElement
			.querySelector('.bar')
			.classList.remove('progress');
	});
});

btnSuccess.addEventListener('click', function (e) {
	popupSuccess.classList.toggle('show-popup');
	e.target
		.closest('.success')
		.parentElement.parentElement.querySelector('.success-bar')
		.classList.toggle('progress');
});

btnError.addEventListener('click', function (e) {
	popupError.classList.toggle('show-popup');
	e.target
		.closest('.error')
		.parentElement.parentElement.querySelector('.error-bar')
		.classList.toggle('progress');
});

btnWarning.addEventListener('click', function (e) {
	popupWarning.classList.toggle('show-popup');
	e.target
		.closest('.warning')
		.parentElement.parentElement.querySelector('.warning-bar')
		.classList.toggle('progress');
});

btnInfo.addEventListener('click', function (e) {
	popupInfo.classList.toggle('show-popup');

	e.target
		.closest('.info')
		.parentElement.parentElement.querySelector('.info-bar')
		.classList.toggle('progress');
});
