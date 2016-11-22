/**
 * Huyack.js
 * ---------
 *
 * Introducing Huyack.js - first-class "Huyack Driven Development"
 * framework for "Zayebis" applications
 *
 * Author: Yohan
 * License GNU GPL
 * Copyright 2016 !yourmom
 */

'use strict';

// Main Huyack module
function Huyack () {
	this.isFriday = 5 == new Date().getDay();
	this.simon    = new Simon();
	this.tyomka   = new Lebedev();
	this.quality  = 0.5;

	typeof console != 'undefined' && (console.loh = console.log);

	this._init();
}

Huyack.prototype.huyack = function (environment) {
	this.isProduction = /прод|prod|срочно|сойдет|пятни/i.test(environment);

	if (this.isProduction && this.isFriday) {
		console.loh( this.simon.says('everything_ok') );
	}
	else if (this.isProduction && !this.isFriday) {
		console.loh( this.simon.says('not_friday') );
	}
	else {
		console.loh( this.simon.says('not_prod') );
	}
}

Huyack.prototype.zayebis = function () {
	Array.prototype.forEach.call( document.querySelectorAll('body *'), (element) => {
		if ( this.quality - Math.random() > 0 ) {
			element.style.backgroundColor = this.tyomka.hexrand();
			element.style.color           = this.tyomka.hexrand();

			(0.15 - Math.random() > 0) && this.quality == 1 && this.tyomka.epilepsy(element, 200);
		}
	} );

	if ( this.quality == 1 ) {
		Array.prototype.forEach.call( document.querySelectorAll('body a'), (element) => {
			element.className += this.tyomka.spinnerClassname;
		} );
	}
};

Huyack.prototype._init = function () {
	Object.defineProperties( Huyack.prototype, {
		minimum:  { get () { this.quality = 0.1; return this } },
		moderate: { get () { this.quality = 0.5; return this } },
		maximum:  { get () { this.quality = 1;   return this } },
		make:     { get () { return this } }
	});
}

// Some internalization
function Simon (locale) {
	this.locale = locale || window.navigator.language;
	this.i18n = {
		ru: {
			everything_ok: 'Все заебись, можно коммитить!',
			not_friday: 'Ты что мудак? Кто коммитит не в пятницу?',
			not_prod: 'Переключи ветку на мастер и лей на прод, покажи миру свой код.'
		},
		en: {
			everything_ok: 'You are good to go, what are you waiting for?',
			not_friday: 'Are you a douch? Code hard until Friday.',
			not_prod: 'There is no fucking sense in your commit unless it is done to prod. Switch branch to master and push to prod'
		},
		es: {
			everything_ok: 'Si, senior!',
			not_friday: '¿Que? Vete a la polla.',
			not_prod: '¡Maricón de mierda!'
		}
	};
}

Simon.prototype.says = function (phrase) {
	if ( this.i18n.hasOwnProperty(this.locale) ) {
		if ( this.i18n[this.locale].hasOwnProperty(phrase) ) {
			return this.i18n[this.locale][phrase];
		}
		else {
			throw new Error('Simon have nothing to say.');
		}
	}
	else {
		throw new Error('This gibberish is unknown to Simon.');
	}
}

// Color helper functions.
// Class named after (in)famous russian designer Artemiy Tatyanovich Lebedev (aka Tyoma)
function Lebedev () {
	this.asshole = true;

	this.spinnerClassname = 'tak-verstayut-tolko-mudaki';

	this._init();
}

Lebedev.prototype.hexrand = () =>
	'#' + Math.floor( (1 << 24) * Math.random() | 0).toString(16);

Lebedev.prototype.hexinvert = (color) =>
	'#' + ('000000' + (0xffffff ^ parseInt( color.replace(/^#/, ''), 16) ).toString(16)).slice(-6);

Lebedev.prototype.epilepsy = function (element, freq) {
	setTimeout( () => { element.style.backgroundColor = this.hexrand(); this.epilepsy(element, freq) }, freq );
};

Lebedev.prototype._init = function () {
	var style = document.createElement('style');

	style.innerHTML += '@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }';
	style.innerHTML += '@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }';
	style.innerHTML += '@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }';
	style.innerHTML += '.' + this.spinnerClassname + ' { -webkit-animation: spin 1s linear infinite; -moz-animation: spin 1s linear infinite; animation: spin 1s linear infinite; }';

	document.getElementsByTagName('head')[0].appendChild(style);
}

