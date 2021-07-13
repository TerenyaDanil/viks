

$("input[name=phone]").inputmask({
	mask: "+7(999) 999-9999",
});


$("input[name=email]").inputmask({
	mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
	greedy: false,
	onBeforePaste: function (pastedValue, opts) {
		pastedValue = pastedValue.toLowerCase();
		return pastedValue.replace("mailto:", "");
	},
	definitions: {
		'*': {
			validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
			cardinality: 1,
			casing: "lower"
		}
	}
});

const links = document.querySelectorAll("a.link");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop - 100,
		behavior: "smooth"
	});
}



burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__nav');
menuItem = document.querySelectorAll('.nav-header__item');

dark = document.querySelector('.bg-mob');

burger.onclick = function () {
	burger.classList.toggle('active');
	dark.classList.toggle('active');
	menu.classList.toggle('active');
}

dark.onclick = function () {
	burger.classList.toggle('active');
	dark.classList.toggle('active');
	menu.classList.toggle('active');
}

menuItem.forEach(function (el) {
	el.onclick = function () {
		burger.classList.toggle('active');
		dark.classList.toggle('active');
		menu.classList.toggle('active');
	}
});



const btn = document.querySelectorAll('.btn')
let cx, cy, mouseX, mouseY, posX, posY

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	const body = document.querySelector('body')

	cx = window.innerWidth / 2
	cy = window.innerHeight / 2

	body.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY


		mouseCoords(e)
		follower.classList.remove('hidden')

	})


	const
		follower = document.getElementById('aura'),
		links = document.querySelectorAll('.link')


	mouseX = 0, mouseY = 0, posX = 0, posY = 0

	function mouseCoords(e) {

		mouseX = e.pageX
		mouseY = e.pageY

	}

	gsap.to({}, .01, {

		repeat: -1,

		onRepeat: () => {

			posX += (mouseX - posX) / 5
			posY += (mouseY - posY) / 5



			gsap.set(follower, {
				css: {
					left: posX - 24,
					top: posY - 24
				}
			})

		}

	})

	for (let i = 0; i < links.length; i++) {

		links[i].addEventListener('mouseover', () => {
			follower.classList.add('_active')
			links[i].classList.add('_active')
		})

		links[i].addEventListener('mouseout', () => {
			follower.classList.remove('_active')
			links[i].classList.remove('_active')
		})


	}
	for (let i = 0; i < btn.length; i++) {

		btn[i].addEventListener('mouseover', () => {
			follower.classList.add('_activeBtn')
			links[i].classList.add('_activeBtn')
		})

		btn[i].addEventListener('mouseout', () => {
			follower.classList.remove('_activeBtn')
			links[i].classList.remove('_activeBtn')
		})


	}

	body.addEventListener('mouseout', () => {
		follower.classList.add('hidden')
	})

})




////////////////////////////////////////




let header = gsap.timeline({
	scrollTrigger: {
		trigger: ".header",
		start: "top center",

	}
});
let benefit = gsap.timeline({
	scrollTrigger: {
		trigger: ".benefit",
		start: "top center",
	}
});
let consult = gsap.timeline({
	scrollTrigger: {
		trigger: ".consult",
		start: "top center",
	}
});
let smm = gsap.timeline({
	scrollTrigger: {
		trigger: ".smm",
		start: "top center",
	}
});
let target = gsap.timeline({
	scrollTrigger: {
		trigger: ".target",
		start: "35% center",
	}
});
let promo1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".promo__wrap-1",
		start: "top center",
	}
});
let promo2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".promo__wrap-2",
		start: "top center",
	}
});
let payment = gsap.timeline({
	scrollTrigger: {
		trigger: ".payment",
		start: "top center",
	}
});
let qus = gsap.timeline({
	scrollTrigger: {
		trigger: ".qus",
		start: "top center",
	}
});

///////////////////////////////////////////////
if (window.innerWidth > 737) {

	header.from(".header__title-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, x: -200 }, "0")
		.from(".header__title-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, x: -150 }, "-=0.6")
		.from(".header__title-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, x: 50 }, "-=0.6")
		.from(".header__title-circle", { duration: 1.4, ease: "power4.out", opacity: 0, rotation: 120, }, "-=0.6")
		.from(".nav-header__item", { duration: 0.01, ease: "power4.out", opacity: 0, y: 5, stagger: 0.1 }, "-=1.2")
		.from(".header__text", { duration: 0.8, ease: "power4.out", opacity: 0, y: 20 }, "-=0.6")
		.from(".header__btn", { duration: 0.8, ease: "power4.out", opacity: 0, y: 20 }, "-=0.6")


} else {
	header.from(".header__title-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "0")
		.from(".header__title-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")
		.from(".header__title-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, x: 50 }, "-=0.6")
		.from(".header__title-circle", { duration: 0.8, ease: "power4.out", opacity: 0, rotation: 90, }, "-=0.6")
		.from(".header__text", { duration: 0.8, ease: "power4.out", opacity: 0, y: 20 }, "-=0.6")
		.from(".header__btn", { duration: 0.8, ease: "power4.out", opacity: 0, y: 20 }, "-=0.6")

}

/////////////////////////////////////////////////////

if (window.innerWidth > 737) {

	benefit.from(".benefit__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".benefit__title-img img", {}, "-=0.6")
		.from(".inner-benefit__item", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50, stagger: 0.3 }, "-=0.6")



} else {
	benefit.from(".benefit__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 30 }, "")



}

/////////////////////////////////////////////////////

if (window.innerWidth > 737) {

	consult.from(".consult__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".consult__title-img img", {}, "-=0.6")



} else {
	consult.from(".consult__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 30 }, "")

}


//////////////////////////////////////////////////////////

if (window.innerWidth > 737) {

	smm.from(".smm__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".smm__title-img img", {}, "-=0.6")
		.from(".inner-smm__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".inner-smm__item", { duration: 0.6, ease: "power4.out", opacity: 0, y: 20, stagger: 0.1 }, "-=0.6")
		.from(".inner-smm__btn", { duration: 0.8, ease: "power4.out", opacity: 0, y: 20 }, "-=0.4")



} else {
	smm.from(".smm__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 30 }, "")

}

//////////////////////////////////////////////////////////


if (window.innerWidth > 737) {

	target.from(".target__man", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "")
		.from(".target__title-item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 100, stagger: 0.1 }, "-=0.6")
		.from(".circle-target__item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 30, stagger: 0.1 }, "-=1.2")
		.from(".target__btn", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "")




} else {

	target.from(".target__man", { duration: 0.8, ease: "power4.out", opacity: 0, y: 100 }, "")
		.from(".target__title-item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50, stagger: 0.1 }, "-=0.6")
		.from(".circle-target__item", { duration: 1.2, ease: "power4.out", opacity: 0, y: 30, stagger: 0.1 }, "-=1.2")
		.from(".target__btn", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "")
}


//////////////////////////////////////////////////////////

if (window.innerWidth > 737) {

	promo1.from(".promo__wrap-1 .inner-promo__title", { duration: 0.8, ease: "power4.out", opacity: 0, x: -100 }, "-=0.6")
		.from(".promo__wrap-1 .inner-promo__title-img img", {}, "-=0.6")
		.from(".promo__wrap-1 .inner-promo__subtitle", { duration: 0.8, ease: "power4.out", opacity: 0, x: -100 }, "-=0.6")
		.from(".promo__wrap-1 .inner-promo__text", { duration: 0.8, ease: "power4.out", opacity: 0, x: -100 }, "-=0.6")
		.from(".promo__wrap-1 .inner-promo__btn", { duration: 0.8, ease: "power4.out", opacity: 0, x: -100 }, "-=0.6")
	promo2.from(".promo__wrap-2 .inner-promo__title", { duration: 0.8, ease: "power4.out", opacity: 0, x: 100 }, "-=0.6")
		.from(".promo__wrap-2 .inner-promo__title-img img", {}, "-=0.6")
		.from(".promo__wrap-2 .inner-promo__subtitle", { duration: 0.8, ease: "power4.out", opacity: 0, x: 100 }, "-=0.6")
		.from(".promo__wrap-2 .inner-promo__text-item", { duration: 0.8, ease: "power4.out", opacity: 0, x: 100, stagger: 0.1 }, "-=0.6")
		.from(".promo__wrap-2 .inner-promo__btn", { duration: 0.8, ease: "power4.out", opacity: 0, x: 100 }, "-=0.6")

} else {
	promo1.from(".promo__wrap-1 .inner-promo__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
	promo2.from(".promo__wrap-2 .inner-promo__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
}

///////////////////////////////////////////////////////////////

if (window.innerWidth > 737) {

	payment.from(".payment__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".payment__title-img img", {}, "-=0.6")



} else {

	payment.from(".payment__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 30 }, "")
}

///////////////////////////////////////////////////////////////

if (window.innerWidth > 737) {

	qus.from(".qus__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
		.from(".qus__title-img img", {}, "-=0.6")
		.from(".inner-qus__item", { duration: 0.6, ease: "power4.out", opacity: 0, y: 40, stagger: 0.2 }, "-=0.6")
		.from(".qus__text", { duration: 0.4, ease: "power4.out", opacity: 0, y: 20 }, "-=0.4")


} else {
	qus.from(".qus__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 30 }, "")

}




"use strict"

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	// Получение слойлеров с медиа запросами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	// Инициализация слойлеров с медиа запросами
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});
			// Событие
			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}
//========================================================================================================================================================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

//========================================================================================================================================================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например:
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/

