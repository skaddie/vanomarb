$(document).ready(function () {

	// var message = {

	// 	message: [
	// 		'Hi Everyone. ',
	// 		'My name is Van Omar Benaires.',
	// 		'I am a Fresh Graduate.',
	// 		'I am 22 years old.',
	// 		'I like to travel, modify codes and play games.',
	// 		'I have some basic programming skills on HTML, CSS, JavaScript, PHP, MySQL and C#, JQuery frameworks/libraries.',
	// 		'Thanks for visiting my personal site',
	// 		'Cheers!'
	// 	],
	// 	counterS: 0,
	// 	counterL: 0,
	// 	deleteS: false,

	// 	init: function () {
	// 		this.cacheElem();
	// 		this.type();
	// 	},

	// 	cacheElem: function () {
	// 		this.$text = $('.text');
	// 	},

	// 	type: function () {
	// 		var message = this.message[this.counterS],
	// 			that = this,
	// 			speed = 0;

	// 		message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
	// 		if (this.message[this.counterS] != message && !this.deleteS) {
	// 			this.$text.text(message);
	// 			speed = 90;
	// 		}
	// 		else {
	// 			this.deleteS = true;
	// 			speed = this.message[this.counterS] == message ? 1000 : 40;
	// 			this.$text.text(message);
	// 			if (message == '') {
	// 				this.deleteS = false;
	// 				this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
	// 			}
	// 		}
	// 		setTimeout(function () { that.type() }, speed);
	// 	}
	// };
	// message.init();



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
