function validateform()
{
   var uname=document.myform.username.value;
   var pass=document.myform.InputPassword.value;
   var rpass=document.myform.InputPassword1.value;
   var unumber=document.myform.usernumber.value;


   if(uname==null || uname=="")
   {
    alert("Please enter the user name");
    return false;
   }
   
   if(pass=="" ||pass==null)
   {
    alert("Please enter  password");
    document.myform.InputPassword.focus();
    return false;
   }
  
   if(pass.length<8)
   {
    alert("password length should contain atleast 8 digit");
    document.myform.InputPassword1.focus();
    return false;
   }

   if(rpass=="" || rpass==null)
   {
    alert("Please  re-enter the password");
    document.myform.InputPassword1.focus();
    return false;
   }
   
   if(rpass.length<8)
   {
    alert("password length should contain atleast 8 digit");
    document.myform.InputPassword1.focus();
    return false;
   }

   if(rpass!=pass)
   {
      alert("both  value should be same please re-enter password");
      document.myform.InputPassword1.focus();
      return false;
   }


   if(unumber=="" || unumber==null)
   {
    alert("Please enter number");
    thisform.usernumber.focus();
    return false;
   } 
   
   if(unumber.length>10 || unumber.length<10)
   {
      alert("usernumber should be not less or greater then 10");
      document.myform.usernumber.focus();
      return false;
   }
 }