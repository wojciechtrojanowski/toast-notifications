const btns = document.querySelectorAll('.button');
const popups = document.querySelectorAll('.popup');
const close = document.querySelectorAll('.close');

const showPopup = (e) => {
	let popup = document.querySelector(`.popup-${e.target.classList[1]}`);
	popup.classList.toggle('show-popup');
	handleProgress(e);
};
const closePopup = (e) => {
	let popup;
	if (e.target.classList.contains('fa-solid')) {
		popup = e.target.closest('.popup');
	} else {
		popup = document.querySelector(`.popup-${e.target.classList[1]}`);
	}

	popupAnimation(popup);

	//Zabieram klase progress!!!

	popup.querySelector('.bar').classList.remove('progress');
};
const popupAnimation = (popup) => {
	popup.style.left = '30%';
	setTimeout(function () {
		popup.style.removeProperty('left');
		popup.classList.remove('show-popup');
	}, 100);
};
const handleProgress = (e) => {
	let bar;

	if (e.target.classList.contains('fa-solid')) {
		bar = e.target.closest('.popup').querySelector('.bar');
	} else {
		bar = document.querySelector(`.${e.target.classList[1]}-bar`);
	}

	bar.classList.add('progress');
};

btns.forEach((btn) => {
	btn.addEventListener('click', function (e) {
		let popup = document.querySelector(`.popup-${e.target.classList[1]}`);
		if (popup.classList.contains('show-popup')) {
			closePopup(e);
		} else {
			showPopup(e);
			setTimeout(function () {
				popup.classList.remove('show-popup');
				popup.querySelector('.bar').classList.remove('progress');
			}, 5000);
		}
	});
});
close.forEach((el) => {
	el.addEventListener('click', closePopup);
});

//TODO
//1. Po znikniecu element wskaukje to gory nie miejsce innego
