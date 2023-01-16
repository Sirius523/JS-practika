'use strict';
//Задание 1
var elements = document.getElementsByTagName('input');
var tests = document.getElementById('test');
for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('blur', funс);
}

function funс() {
	tests.innerHTML = this.value;
}