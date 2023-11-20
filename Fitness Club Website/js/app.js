document.addEventListener("DOMContentLoaded", function (event) {



	// бургер меню
	let burger = document.querySelector(".burger-menu");
	let documentBody = document.documentElement;

	 function menuOpen() {
		documentBody.classList.toggle("lock");
		documentBody.classList.toggle("menu-open");
	}

	 function menuClose() {
		documentBody.classList.remove("menu-open");
		documentBody.classList.remove("lock");
	}

	burger.addEventListener("click", function () {
		menuOpen();
	});


	// слайдер
	if (document.querySelector('.main__slider')) { 
		new Swiper('.main__slider', { 
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 500,
			loop: true,
			allowTouchMove: false,
			effect: 'fade',
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
		});
	}



	

});



