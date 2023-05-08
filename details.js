let p1=document.getElementById("name");
let p2=document.getElementById("regno");
let p3=document.getElementById("date");
let p4=document.getElementById("yar");
let p5=document.getElementById("dept");
let p6=document.getElementById("ans");
let P7=document.getElementById("regno1");
let p8=document.getElementById("regno2");
let p9=document.getElementById("pwd");
let p10=document.getElementById("user");
let p11=document.getElementById("pwd1");
let p12=document.getElementById("text");
let p13=document.getElementById("user1");
let p14=document.getElementById("pwd2");
let p15=document.getElementById("pwd3");
let p16=document.getElementById("user2");
let p17=document.getElementById("pwd4");
let p18=document.getElementById("pwd5");

let nam=[];
let regno=[];
let date=[];
let year=[];
let dept=[];
let user=[];
let psd=[];
let pin=1234;
let fake=localStorage.getItem("idname");

let aja=JSON.parse(localStorage.getItem("user"));
let aj=JSON.parse(localStorage.getItem("regno"));
if(aja)
{
    user=JSON.parse(localStorage.getItem("user"));
    psd=JSON.parse(localStorage.getItem("psd"));   
}

if(aj)
{
nam=JSON.parse(localStorage.getItem("name"));
regno=JSON.parse(localStorage.getItem("regno"));
date=JSON.parse(localStorage.getItem("date"));
year=JSON.parse(localStorage.getItem("year"));
dept=JSON.parse(localStorage.getItem("dept"));
}
function button()
{  
    
    if(p1.value.length!==0&&p2.value.length!==0&&p3.value.length!==0&&p4.value.length!==0&&p5.value.length!==0)
    {
        let flag=0;
        let a=p2.value;
    for(let i=0;i<regno.length;i++)
    {
        let b=a.localeCompare(regno[i]);
        if(b==0)
        {
        flag=1;
        break;
        }
    }
    if(flag==0)
    {
    nam.push(p1.value);
    regno.push(p2.value);
    date.push(p3.value);
    year.push(p4.value);
    dept.push(p5.value);
   localStorage.setItem("name",JSON.stringify(nam));
    localStorage.setItem("regno",JSON.stringify(regno));
    localStorage.setItem("date",JSON.stringify(date));
    localStorage.setItem("year",JSON.stringify(year));
    localStorage.setItem("dept",JSON.stringify(dept));
    p1.value="";
    p2.value="";
    p3.value="";
    p4.value="Select";
    p5.value="Select";

    alert("Student Details is Added Successfully...")
    }
    else
    alert("Register Number is Already Exist...");
}

    else{
        alert("Enter the value!!!");
    }
}
function getvalue()
{
    let count=0;
    let val;
    let a=P7.value;
    if(a.length!==0)
    {
        let flag=0;
    for(let i=0;i<regno.length;i++)
    {
        let b=a.localeCompare(regno[i]);
        if(b==0)
        {
            val=i;
            flag=1;
            break;
        }
    }
    if(flag==0)
    alert("Register Number is not Found...")
    else{
    p6.innerHTML=`<li>Name&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${nam[val]}</li>
    <li>Register number&nbsp&nbsp&nbsp: ${regno[val]}</li>
    <li>Date of birth&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${date[val]}</li>
    <li>Year of joining&nbsp&nbsp&nbsp&nbsp&nbsp: ${year[val]}</li>
    <li>Department&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${dept[val]}</li>`;
    }
    P7.value=""
}
else
alert("Enter Rigester Number!!!");

}
function deletevalue(){
    let count=0;
    let val;
    let a=p8.value;
    if(a.length!==0)
    {
        if(p9.value==pin)
        {
            let flag=0;
    for(let i=0;i<regno.length;i++)
    {
        let b=a.localeCompare(regno[i]);
        if(b==0)
        {
            val=i;
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
    alert("Register Number Is Not Found...");
    p8.value="";
    }
    else{
    nam.splice(val,val+1);
    regno.splice(val,val+1);
    date.splice(val,val+1);
    year.splice(val,val+1);
    dept.splice(val,val+1);
    localStorage.setItem("name",JSON.stringify(nam));
    localStorage.setItem("regno",JSON.stringify(regno));
    localStorage.setItem("date",JSON.stringify(date));
    localStorage.setItem("year",JSON.stringify(year));
    localStorage.setItem("dept",JSON.stringify(dept));
    alert("Student Details Removed Successfully...");
    p8.value="";
    p9.value="";
    }
    }
    else
    {
        p9.value="";
    alert("Enter the Correct Pin...");
    }
}
else{
    alert("Enter The register Number!!!");
}
}
function login()
{
   if(p10.value.length!==0&&p11.value.length!==0)
   {
   let username=p10.value;
   let password=p11.value;
   let flag=0;
   let val;
   for(let i=0;i<user.length;i++)
   {
    let b=username.localeCompare(user[i]);
        if(b==0)
        {
            val=i;
            flag=1;
            break;
        }
   }
   if(flag==1)
   {
      let s=password.localeCompare(psd[val])
      if(s==0)
      {
        localStorage.setItem("idname",username);
        window.location.href = "home.html";
      }
      else{
        alert("Password is Wrong!!!");
      }
   }
   else
   alert("Username is wrong!!!");
}
else
alert("Enter All The Details!!!")
}
function register()
{
    if(p13.value.length!==0&&p14.value.length!==0&&p15.value.length!==0)
    {
        let flag=0;
        for(let i=0;i<user.length;i++)
        {
            let d=p13.value.localeCompare(user[i]);
            if(d==0)
            {
                flag=1;
                break;
            }
        }
        if(flag==0)
        {
    let b=p14.value.localeCompare(p15.value);
        if(b==0)
        {
            user.push(p13.value);
            psd.push(p14.value);
            alert("Registered Successfully...");
            localStorage.setItem("user",JSON.stringify(user));
            localStorage.setItem("psd",JSON.stringify(psd));
            p13.value="";
            p14.value="";
            p15.value="";
            window.location.href = "Login.html";
        }
        else
        alert("Password Mismatched!!!")
    }
    else
    alert("UserName already Exist!!!");
    }
    else{
        alert("Enter All the Details!!!")
    }
}
function changepassword()
{
    if(p16.value.length!==0&&p17.value.length!==0&&p18.value.length!==0)
    {
        let flag=0;
        let val;
        for(let i=0;i<user.length;i++)
        {
            let d=p16.value.localeCompare(user[i]);
            if(d==0)
            {
                flag=1;
                val=i;
                break;
            }
        }
        if(flag==1)
        {
        let b=p17.value.localeCompare(p18.value);
        if(b==0)
        {
            psd[val]=p17.value;
            alert("Password Changed Successfully...");
            localStorage.setItem("user",JSON.stringify(user));
            localStorage.setItem("psd",JSON.stringify(psd));
            p16.value="";
            p17.value="";
            p18.value="";
            window.location.href = "Login.html";
        }
        else
        alert("Password Mismatched!!!")
    }
    else
    alert("UserName is not Exist!!!");
    }
    else{
        alert("Enter All the Details!!!")
    }
}
function iddetails()
{
    p12.textContent=fake;
}