'use strict'
var elements = document.getElementsByTagName('p');
for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', funс);
}

function funс() {
	this.innerHTML = this.innerHTML * this.innerHTML;
}