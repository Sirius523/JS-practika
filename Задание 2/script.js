'use strict'
//Задание 2
var elements = document.getElementsByTagName('input');
for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', funс);
}

function funс() {
	alert(this.value);
	this.removeEventListener('click', funс);
}