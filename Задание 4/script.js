'use strict'
var elements = document.getElementsByTagName('input');
for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('blur', func);
}

function func() {
	var correctLength = this.dataset.length; 
	var inputDataLength = this.value.length; 
	if(correctLength == inputDataLength){
		this.style.borderColor = 'green';
	} else {
		this.style.borderColor = 'red';
	}
}