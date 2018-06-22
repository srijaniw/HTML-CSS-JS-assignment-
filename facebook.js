 var valid=0;
function validate()
{
   
   var fname=document.getElementById("txtFirstName").value;
   var lname=document.getElementById("txtLastName").value;
   var emails=document.getElementById("txtEmail").value;
   var password=document.getElementById("txtPassword").value;
   var  gender=document.getElementById("gen").value;

    var gen_value;
    if(document.getElementById('fem').checked)
    {
        gen_value="Female"
    }
    if(document.getElementById('male').checked)
    {
        gen_value="Male";
    }

    var year=document.getElementById("Year").value;
    var mnth=document.getElementById("Month").value;
    var day=document.getElementById("Day").value;

if(FnameValidate(fname))
{
    if(LnameValidate(lname))
    {
        if(EmailValidate(emails))
        {
            if(PasswordValidate(password))
            {
                if(dateValidation(year,mnth,day))
                {
                    if(GenderValidation(gen_value))
                    {
                        if(valid==6)
                        {
                           
                            alert("Validated");
                        }
                    }
                }
            }
        }
    }
}
return false;
    
}
function FnameValidate(fname)
{
    if(fname=="")
    {   valid=0;
        alert("Enter your First Name");
        // document.getElementById('erFname').innerHTML = "Enter your First Name";
 
    return false;
   
    }


    else
    {
        // document.getElementById('erFname').innerHTML = "";
       valid++;
        return true;
       
    }
}

function LnameValidate(lname)
{
    if(lname=="")
    {valid=0; 
        alert( "Enter your Last Name"); 
        // document.getElementById('erLname').innerHTML = "Enter your Last Name";
    
    return false; 
    
    }
    else
    {
        // document.getElementById('erLname').innerHTML = "";
        valid++;
        return true;
        
    }
}

function EmailValidate(emails)
{

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emails.match(mailformat))
    {
        //  document.getElementById('erEmail').innerHTML = "";
    valid++;
    return true; 
      
    }
    else{ valid=0;  
        // document.getElementById('erEmail').innerHTML ="Enter Email";
       
      alert("Enter Email");
        return false;
      
    }

}
function PasswordValidate(password)
{if(password!="")
    if(password.length<6 && password.length>8)
    { valid=0;
        alert("Password Should be 6-8 Characters");
        // document.getElementById('erPassword').innerHTML = "Password Should be 6-8 Characters";
    
    return false;
   
    }
    else{
        // document.getElementById('erPassword').innerHTML = "";
        valid++;
        return true;
       
    }
    else{
        alert("Enter Password");
    }
}
function dateValidation(year,mnth,day)
{
    if(year==0 && mnth==0 &&day==0)
    {  valid=0;
        alert("Select your Birthday");
        // document.getElementById('erBirthday').innerHTML = "Select your Birthday";
      
        return false;
       
    }
    else
    {
       
        valid++;
        return true;
       
    }
}
function GenderValidation(gen_value)
{

    if(gen_value=="")
    {  valid=0;
        // document.getElementById('erGender').innerHTML = "Select Gender";
      alert("Select Gender");
        return false;
       
    }
    else
    {
        // document.getElementById('erGender').innerHTML = "";
        valid++;
        return true;
        
    }
}

function IsValid()
{
    validate()
    if(valid==1)
    {
        window.location.href="signup.html";
    }
}

function login()
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /^[0-9]+$/;
    var em=document.getElementById("email").value;
    var pas=document.getElementById("pass").value;

    if(em!=""&& em.match(mailformat) || em.match(numbers))
    {
        window.open("login.html?email=" + em, '_self', false);
        
        // localStorage.setItem('user', JSON.stringify({
        //     Email: em
           
        // }));
       
    }
    else
    {
        alert("Enter Valid Email or Phone");
       
    }
}
// function signup()
// {
//     var fname=document.getElementById("txtFirstName").value;
//     var lname=document.getElementById("txtLastName").value;
//     var email=document.getElementById("txtEmail").value;
//     var password=document.getElementById("txtPassword").value;
//     var  gender=document.getElementById("gen").value;
//     var year=document.getElementById("Year").value;
//     var mnth=document.getElementById("Month").value;
//     var day=document.getElementById("Day").value;
//     var gen_value;
//     if(document.getElementById('fem').checked)
//     {
        
//         gen_value="female";
//     }
//     if(document.getElementById('male').checked)
//     {
//         gen_value="male";
//     }
// //  var data=[fname,lname,email,password,gen_value,year,mnth,day]
//     localStorage.setItem('values', JSON.stringify({
//     Fname:fname,
//     Lname:lname,
//     Email:email,
//     Password:password,
//     Gender:gen_value,
//     Year:year,
//     Month:mnth,
//     Day:day 
       
//      } ));
   

// }
 
function loginValue(){
    var p = location.search.substring(1).split("&");
    console.log(p);
    var em = p[0].split("-");
    var pa = p[1].split("=");
    l = unescape(em[0]);
    m = unescape(pa[1]);
    document.getElementById("mail").innerHTML = l;
    document.getElementById("pas").innerHTML = m;
}

// function signupValue()
// {

//     var p = location.search.substring(1).split("&");
//     var a = p[0].split("-");
//     var b = p[1].split("=");
//     var c = p[2].split("=");
//     var d = p[3].split("=");
//     var e = p[4].split("=");
//     var f = p[5].split("=");
//     l = unescape(a[0]);
//     m = unescape(b[1]);
//     n = unescape(c[2]);
//     o = unescape(d[3]);
//     p = unescape(e[4]);
//     q = unescape(f[5]);
//     document.getElementById("fn").innerHTML = l;
//     document.getElementById("ln").innerHTML = m;
//     document.getElementById("em").innerHTML = n;
//     document.getElementById("pa").innerHTML = o;
//     document.getElementById("da").innerHTML = p;
//     document.getElementById("gen").innerHTML = q;
// }