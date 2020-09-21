
function validateForm() {

    var name = document.forms["RegForm"]["Name"];          
    var email = document.forms["RegForm"]["Email"];
    var phone = document.forms["RegForm"]["Contact"];
    var password = document.forms["RegForm"]["Password"];
    var gender = document.forms["RegForm"]["Gender"];
    var degree =  document.forms["RegForm"]["Degree"];
    var address =  document.forms["RegForm"]["Address"];
    var resume =  document.forms["RegForm"]["Upload"];

    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    }

    if (password.value == "")                           
    { 
        window.alert("Please enter your password."); 
        password.focus(); 
        return false; 
    } 
   
    if (email.value == "")                               
    { 
		window.alert("Please enter your email address."); 
		email.focus(); 
		return false;
    } 
       
    if (phone.value == "")                                   
    {
        window.alert("Please enter your contact number.");
        phone.focus();
        return false;
    } 
    
    if (gender.value == "")                        
    { 
        window.alert("Please select your gender"); 
        male.focus(); 
        return false; 
    } 
   
    if (degree.selectedIndex < 1)                  
    { 
        alert("Please select your course."); 
        degree.focus(); 
        return false; 
    } 
   
    if (address.value == "")             
    { 
        alert("Please enter your address."); 
        address.focus(); 
        return false; 
    } 
   
    if (resume.value == "")                  
    { 
        alert("Please upload your CV."); 
        resume.focus(); 
        return false; 
    } 
   
    return true; 
  }