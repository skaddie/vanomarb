$(document).ready(function () {

	const message = `Hi there! It's great to meet you. My name is Van Omar Benaires, and I am a recent graduate who is enthusiastic about exploring the world of technology. At the age of 22, I am excited about what the future holds for me.

	One of my biggest passions in life is traveling. I love to explore new places, immerse myself in different cultures, and meet people from all walks of life. In addition to traveling, I also enjoy modifying codes and playing games. These hobbies allow me to sharpen my problem-solving skills and keep my mind sharp.
	
	Regarding my professional skills, I have a solid foundation in programming languages such as HTML, CSS, JavaScript, PHP, MySQL, and C#. I am also familiar with various JQuery frameworks and libraries, which allow me to develop creative and dynamic web applications. I am continuously striving to improve my knowledge and skills in the field of programming, and I believe that lifelong learning is critical to success.
	
	Thank you for visiting my personal site, and I hope you enjoyed learning a bit more about me. Please feel free to reach out to me if you have any questions or just want to say hello. Cheers!`;
	const typingSpeed = 20;

	window.onload = function () {
		const messageEl = document.getElementById("message");
		let i = 0;
		let interval = setInterval(function () {
			if (i < message.length) {
				messageEl.innerHTML += message.charAt(i);
				i++;
			} else {
				clearInterval(interval);
			}
		}, typingSpeed);
	};
});
