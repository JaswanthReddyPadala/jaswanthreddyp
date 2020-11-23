(function () {
	'use strict';
	var slides = document.querySelectorAll('.project-item'),
		 button = document.getElementById('button'),
		 arrows = document.querySelectorAll('.lnr'),
		 carouselCount = 0,
		 scrollInterval,
		 interval = 5000;

	arrows[0].addEventListener('click', function (e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount -= 100;
		slider();
		if (e.type !== 'autoClick') {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(autoScroll, interval);
		}
	});
	arrows[1].addEventListener('click', sliderEvent);
	arrows[1].addEventListener('autoClick', sliderEvent);
	
	function sliderEvent(e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount += 100;
		slider();
		if (e.type !== "autoClick") {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(autoScroll, interval);
		}
	}
	
	function slider() {
		switch (carouselCount) {
			case -100:
				carouselCount = 0;
				break;
			case 300:
				carouselCount = 0;
				break;
			default:
				break;
		}
		console.log(carouselCount);
		for (var i = 0; i < slides.length; i += 1) {
			slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
		}
	}
	
	// create new Event to dispatch click for auto scroll
	var autoClick = new Event('autoClick');
	function autoScroll() {
		arrows[1].dispatchEvent(autoClick);
	}
	
	// set timing of dispatch click events
	scrollInterval = setInterval(autoScroll, interval);
	
})();
// const delay = 3000; //ms

// const slides = document.querySelector(".slides");
// const slidesCount = slides.childElementCount;
// const maxLeft = (slidesCount - 1) * 100 * -1;

// let current = 0;

// function changeSlide(next = true) {
//   if (next) {
//     current += current > maxLeft ? -100 : current * -1;
//   } else {
//     current = current < 0 ? current + 100 : maxLeft;
//   }

//   slides.style.left = current + "%";
// }

// let autoChange = setInterval(changeSlide, delay);
// const restart = function() {
//   clearInterval(autoChange);
//   autoChange = setInterval(changeSlide, delay);
// };

// // Controls
// document.querySelector(".next-slide").addEventListener("click", function() {
//   changeSlide();
//   restart();
// });

// document.querySelector(".prev-slide").addEventListener("click", function() {
//   changeSlide(false);
//   restart();
// });
