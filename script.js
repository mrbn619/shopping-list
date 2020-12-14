var button= document.getElementById('enter');
var input= document.getElementById('userinput');
var ul = document.querySelector('ul');
var deleteBtns= document.getElementsByClassName('delete');

for(var i=0;i<deleteBtns.length;i++){
	deleteBtns[i].addEventListener('click',removeParent);
}

function removeParent(event){
	event.target.parentNode.remove();
}

ul.onclick=function(event){
	event.target.classList.toggle('done');
}

function inputLength(){
	return input.value.length >0;
}

function createNewList(){
	var li=document.createElement('li');
	li.innerHTML=(input.value);//or li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li);
	li.classList.add('green');
	input.value='';

	var listButton=document.createElement('button');
	listButton.innerHTML=('Delete');
	li.appendChild(listButton);
	listButton.classList.add('delete');
	listButton.onclick=removeParent;
}

function addListAfterClick(){
	if (inputLength()){
		createNewList();
	}
}

function addListAfterKeyPress(event){
	if (inputLength() && event.which===13){
		createNewList();
	}
}

button.addEventListener('click',addListAfterClick);
input.addEventListener('keypress',addListAfterKeyPress);