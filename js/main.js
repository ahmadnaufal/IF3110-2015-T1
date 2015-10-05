function validateName() {
	var name = document.getElementById('name').value;
	if (name == null || name == "") {
		alert("Please insert your name!");
		return false;
	}

	return true;
}

function validateEmail() {
	var email = document.getElementById('email').value;
	var pattern = "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"; 
	if (!email.match(pattern)) {
		alert("Please correct your email!");
		return false;
	}

	return true;
}

function validateTopic() {
	var topic = document.getElementById('topic').value;
	if (topic == null || topic == "") {
		alert("Please define your question topic!");
		return false;
	}

	return true;
}

function validateContent() {
	var content = document.getElementById('content').value;
	
	if (content == null || content == "") {
		alert("Please define your question content!");
		return false;
	}

	return true;
}

function validateQuestionForm() {
	if (validateName() && validateEmail() && validateTopic() && validateContent())
		return true;
	else
		return false;
}

function validateAnswerForm() {
	if (validateName() && validateEmail() && validateContent())
		return true;
	else
		return false;
}