document.addEventListener("DOMContentLoaded", function() {
	// Создаём наблюдатель для отслеживания видимости элемента
	const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
					// Если элемент в поле зрения, добавляем класс 'visible'
					if (entry.isIntersecting) {
							entry.target.classList.add('visible');
							observer.unobserve(entry.target);  // Останавливаем наблюдение за этим элементом
					}
			});
	}, {
			threshold: 0.3  // Когда элемент будет виден хотя бы на 50%, он будет активирован
	});

	// Наблюдаем за всеми элементами с классом 'animate-on-scroll'
	const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
	elementsToAnimate.forEach(element => {
			observer.observe(element);
	});
});