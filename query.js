//Form Validation
function validateForm(form){
	if (form.name.value.length == 0){
		alert("You have not entered your name");
		return false;
	}
	
	if (form.email.value.length == 0 ){
		alert("You have not entered your email");
		return false; 
	}
	
	let radios = document.getElementsByName("query");
	if (radios[0].checked == false) {
		if (radios[1].checked == false) {
			if (radios[2].checked == false) {
				alert("You have not selected a subject for your concern");
				return false;
			}
		}
	}
	
	if (form.feedback.value.length == 0){
		alert("You have not entered your concern");
		return false;
	}
	else{
		getText();
	}	
}

//To display information using innerHTML
function getText(){
	let abc1 = document.querySelector("#dv");
	abc1.style.display = "none";
	
	let cde2 = document.querySelector("#dv2");
	cde2.style.display = "block";	
	
	let textOne = document.getElementById("name").value;
	document.getElementById("one").innerHTML = "Name: "+textOne;
	
	let textTwo = document.getElementById("email").value;
	document.getElementById("two").innerHTML = "Email: "+textTwo;
	
	let textFour = document.getElementById("feedback").value;
	document.getElementById("four").innerHTML = "Details: "+textFour;
	
//To display the subject 	
	let radios = document.getElementsByName("query");
	if (radios[0].checked == true) {
	document.getElementById("three").innerHTML="Subject: Delivery";
	}
	if (radios[1].checked == true) {
	document.getElementById("three").innerHTML="Subject: Products";
	}
	if (radios[2].checked == true) {
	document.getElementById("three").innerHTML="Subject: Discounts and Offers";
	}
	
//To create the edit and and send buttons
	let btntwo = document.createElement("button"); 
	btntwo.setAttribute("class","btall");
	btntwo.setAttribute("type","button");
	btntwo.setAttribute("onclick","back();")
	btntwo.innerHTML = "Edit"; 
	ftwo.appendChild(btntwo);
	
	let btnone = document.createElement("button");
	btnone.setAttribute("class","btall");
	btnone.setAttribute("type","submit");
	btnone.innerHTML = "Send";
	ftwo.appendChild(btnone);
	

}

//To display the form again
function back(){
	let abc2 = document.querySelector("#dv2");
	abc2.style.display = "none";
	let cde = document.querySelector("#dv");
	cde.style.display = "block";
}	

