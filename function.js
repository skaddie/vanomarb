$(document).ready(function () {

	var message = {

		message: [
			'Hi Everyone. ', 
			'My name is Van Omar Benaires.', 
			'I am a Fresh Graduate.', 
			'I am 22 years old.', 
            'I like to travel, modify codes and play games.',
            'I have some basic programming skills on HTML, CSS, JavaScript, PHP, MySQL and C#, JQuery frameworks/libraries.',
			'Thanks for visiting my personile site',
            'Cheers!'
		],
		counterS: 0,
		counterL: 0,
		deleteS: false,

		init: function() {
			this.cacheElem();
			this.type();
		},

		cacheElem: function() {
			this.$text = $('.text');
		},

		type: function() {
			var message 	= this.message[this.counterS],
				  that 	    = this,
				  speed 	  = 0;

			message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
			if(this.message[this.counterS] != message && !this.deleteS) {
				this.$text.text(message);
				speed = 90;
			}
			else {
				this.deleteS = true;
				speed = this.message[this.counterS] == message ? 1000 : 40;
				this.$text.text(message);
				if (message == '') {
					this.deleteS = false;
					this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
				}
			}
			setTimeout(function(){that.type()}, speed);
		}
	};
	message.init();
});
