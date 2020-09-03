
/*	
telephone:/^[0-9]{10}$/,
 username:/^[a-z\d]{5,12}$/,
 // password:/^[\w@-/]{8,20}$/,
 email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
*/

const form=document.querySelector('.signup-form');
const feedback=document.querySelector('.feedback');
const feedback1=document.querySelector('.feedback1');
const feedback2=document.querySelector('.feedback2');
const feedback3=document.querySelector('.feedback3');


const usernamePattern=/^[a-zA-Z]{6,12}$/;
const  telephonePattern= /^[0-9]{10}$/;
const emailPattern=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
 const passwordPattern=/^[\w@-]{8,20}$/;



// validation for username
form.username.addEventListener('keyup',e=>{

if(usernamePattern.test(e.target.value)){
	form.username.setAttribute('class','sucess');
	feedback.textContent='that username is valid!';
	feedback.style.color="green";
}
else{
form.username.setAttribute('class','error');
feedback.textContent='username must be letters and be between 6-12';
feedback.style.color="crimson";
}


});


// validation for email
form.email.addEventListener('keyup',e=>{

if(emailPattern.test(e.target.value)){
	form.email.setAttribute('class','sucess');
	feedback1.textContent='that email is valid!';
	feedback1.style.color="green";
}
else{
form.email.setAttribute('class','error');
feedback1.textContent='eg. be basyalkisan@gmail.com';
feedback1.style.color="crimson";
}


});

// validation for password

form.password.addEventListener('keyup',e=>{

if(passwordPattern.test(e.target.value)){
	form.password.setAttribute('class','sucess');
	feedback2.textContent='that password is valid!';
	feedback2.style.color="green";
}
else{
form.password.setAttribute('class','error');
feedback2.textContent='password must alphanumeric (@,- are also allowed and be 8-20 charcters';
feedback2.style.color="crimson";
}


});

// validation for telephone

form.telephone.addEventListener('keyup',e=>{

if(telephonePattern.test(e.target.value))
{


	form.telephone.setAttribute('class','sucess');
	feedback3.textContent='that telephone is valid!';
	feedback3.style.color="green";
}

else{

form.telephone.setAttribute('class','error');
feedback3.textContent='Telephone must be a valid nepal number(10 digits)';
	feedback3.style.color="crimson";

}





});