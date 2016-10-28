/******************************************************************
*
* Introducing Huyack.js - first-class
* Huyack Driven Development
* framework for Zayebis applications.
*
******************************************************************/

function Huyack () {
	this.isFriday = 5 == new Date().getDay();

	typeof console != 'undefined' && (console.loh = console.log);
}

Huyack.prototype.huyack = (environment) => {
	this.isProduction = /прод|prod|срочно|сойдет|пятни/i.test(environment);

	if (this.isProduction && this.isFriday) {
		console.loh('Все заебись, можно коммитить!');
	}
	else if (this.isProduction && !this.isFriday) {
		console.loh('Нужно дождаться пятницы чтобы коммитить. Кто заливает не в конце недели? Только мудаки!');
	}
	else {
		console.loh('Нужно переключить ветку на мастер и лить на прод, иначе никто не увидит твои новые фичи.');
	}
}
