$(document).ready(function(){
    $("#signUpButton").on("click", function(){
    if ($("#nameInput").val().trim() == ""){
            alert("Please Enter Your Name");
    }
    else if ($("#emailInput").val().trim() == ""){
        alert("Please Enter Your Email Adress");
    }
    else if ($("#accountNameInput").val().trim() == ""){
        alert("Please Enter Your Account Name To Create Your Account");
    }
    else if($("#accountPasswordInput").val().trim() == ""){
        alert("Please Enter Your Account Password To Create Your Account");
    }
    else{
        alert("SignUp Successful!");
    }
    });
});