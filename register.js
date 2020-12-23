	
	var form=document.getElementById("form");
	var username=document.getElementById("username");
	var email=document.getElementById("email");
	var phone=document.getElementById("phone");
	var password=document.getElementById("password");
	var cpassword=document.getElementById("cpassword");


	const sendData =(sRate,count) => {
		if(sRate===count){
			alert("Registration succesfull");
			swal("Good job!", "Registration succesfull", "success");
		}

	}

	const successMsg = () => {

		let formCon=document.getElementsByClassName('form-control');
		var count= formCon.length - 1;
		for ( var i = 0 ; i < formCon.length ; i++) {
			if (formCon[i].className === "form-control success ") {
				var sRate=0 + i ;
				sendData(sRate,count);
			}
			else{
				alert("Registration unsuccesfull");
			}
		}
	}

	// adding events

	form.addEventListener('submit',(event) => {
		successMsg();
	})
	username.addEventListener('keyup',(event) =>{
		validateUsername();
	})
	email.addEventListener('keyup',(event) =>{
		validateEmail();
	})
	phone.addEventListener('keyup',(event) =>{
		validatePhone();
	})
	password.addEventListener('keyup',(event) =>{
		validatePassword();
	})
	cpassword.addEventListener('keyup',(event) =>{
		validateCPassword();
	})

	function setErrorMsg(input,error_msg){
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = "form-control error ";
		small.innerText=error_msg;

	}


	function setSuccessMsg(input){
		const formControl = input.parentElement;
		formControl.className = "form-control success ";		
	}

	// validating username
	const validateUsername = () => {

		
		const usernameVal= username.value.trim();
		if(usernameVal===""){
			setErrorMsg(username,"username cannot be blank");
		}
		else if(usernameVal.length <= 5){
			setErrorMsg(username,"username must be more than 5 characters");
		}
		else{
			setSuccessMsg(username);
		}
	}

	// validating email
	const validateEmail = () => {
		const emailVal=email.value.trim();

		if(emailVal===""){
			setErrorMsg(email,"email cannot be blank");
		}
		else if(emailVal.length <= 7){
			setErrorMsg(email,"email must be more than 7 characters");	
		}
		else{
			setSuccessMsg(email);
		}

	}

	// validating phone number
	const validatePhone = () => {
		const phoneVal=phone.value.trim();
		
		if (phoneVal.length != 10){
			setErrorMsg(phone," length of phone number must be 10");
		}	
		else{
			setSuccessMsg(phone);
		}
	}

	// validating password
	const validatePassword = () => {
		const passwordVal=password.value.trim();
		
		if(passwordVal.length > 6){
			setSuccessMsg(password);
		}
		else{
			setErrorMsg(password,"password must be more than 6 characters");
		}
	}


	// validating password
	const validateCPassword = () => {
		const passwordVal=password.value.trim();
		const cpasswordVal=cpassword.value.trim();

		if(cpasswordVal===""){
			setErrorMsg(cpassword,"password cannot be blank");
		}
		else if(cpasswordVal!= passwordVal){
			setErrorMsg(cpassword,"password and confirm password don't match");
		}
		else{
			setSuccessMsg(cpassword);
		}

	}

