let signup=()=>{
    let name=document.querySelector("#name").value.trim()
    let num=document.querySelector("#number").value.trim()
    let email=document.querySelector("#email").value.trim()
    let pass=document.querySelector("#pass").value.trim()
    let cpass=document.querySelector("#cpass").value.trim()

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    if(name==""){
        errname.innerHTML="plese enter name"
        return false
    }
         else if(num==""){
        errnum.innerHTML="plese enter number"
        return false
    }
        else if(email==""){
        erremail.innerHTML="plese enter email"
        return false
    }
       else if(pass==""){
        errpass.innerHTML="plese enter pass"
        return false
    }
       else if(cpass==""){
        errcpass.innerHTML="plese enter cpass"
        return false
    }
    
    else if(num.length!=10){
        errnum.innerHTML="pelse correct number"
        return false
    }
    else if(!(isNaN(Number))){
        errnum.innerHTML="plese enter number only"
        return false
    }

    else if(!(email.includes("@")&& email.includes(".com"))){
        erremail.innerHTML="plese valid email"
        return false
    }
    else if(pass!=cpass){
    errpass.innerHTML="plese enter same password"
    document.querySelector("#cpass").value=""
    document.querySelector("#cpass").focus();
    return false
}


else if(!(pass.match(/[12345667890]/)&&
    pass.match(/[@#$%^&*()]/)&&
    pass.match(/[a-z]/)&&
    pass.match(/[A-Z]/)
)){
        errcpass.innerHTML="plese strong pass"
        return false
    }
        

    localStorage.setItem("Name",name)
    localStorage.setItem("number",num)
    localStorage.setItem("Email",email)
    localStorage.setItem("password",pass)
    
    location.href='login.html'

    return false
}
