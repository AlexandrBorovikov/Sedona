const menuBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.menu-close')
const likeBtn = document.querySelectorAll('.btn-like')


const func = function(elem, params, className,) {
	elem.classList[params](className);
}

menuBtn.addEventListener('click', function() {
	const menu = document.querySelector('.navigation-list-mobile');
	func(menu, 'add', 'navigation-list-js');
})

closeBtn.addEventListener('click', function() {
	const menu = document.querySelector('.navigation-list-mobile');
	func(menu, 'remove', 'navigation-list-js');
})

for (let index = 0; index < likeBtn.length; index++) {
	const element = likeBtn[index];
	element.addEventListener('click', function(event) {
		const svgLike = event.currentTarget.querySelector('.svg-like');
		
		const textLike = event.currentTarget.parentElement.lastElementChild;
		if(svgLike.classList.contains('svg-like-active')) {
			textLike.textContent = +textLike.textContent - 1;
			func(svgLike, 'remove', 'svg-like-active');
			return
		}
		textLike.textContent = +textLike.textContent + 1;
		func(svgLike, 'add', 'svg-like-active');
	})
}


//  page Form

const form = document.querySelector('.wrapper');


form.addEventListener('submit', function() {
	event.preventDefault();
	const data = {
		impress: this.impress.value,
		name: this.name.value,
		secondName: this.secondName.value,
		patronymic: this.patronymic.value,
		phone: this.phone.value,
		email: this.email.value,
		bridge: this.bridge.checked,
		mount: this.mount.checked,
		park: this.park.checked,
		rocks: this.rocks.checked,
		comment: this.comment.value
	}
})

const submit = document.querySelector('.btn-submit')

submit.addEventListener('click', function() {
	const successWrap = document.querySelector('.wrapper-success');
	const failWrap = document.querySelector('.wrapper-fail');

	if(form.checkValidity()) {
		func(successWrap, 'add', 'success-js');
	} else {
		func(failWrap, 'add', 'fail-js');
	}
	
})

const btnPopup = document.querySelectorAll('.btn-popup')
	
for (let i = 0; i < btnPopup.length; i++) {
	const element = btnPopup[i];

	element.addEventListener('click', function() {

		const successWrap = document.querySelector('.wrapper-success');
		const failWrap = document.querySelector('.wrapper-fail');

		if(form.checkValidity()) {
			func(successWrap, 'remove', 'success-js');
			form.reset();
		} else {
			func(failWrap, 'remove', 'fail-js');
		}
		
	})

}











