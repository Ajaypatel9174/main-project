let login=()=>{
    let inname=document.querySelector("#name").value
    let inpass=document.querySelector("#pass").value

    let errname=document.querySelector("#errname")
    let errpass=document.querySelector("#errpass")

     let name= localStorage.getItem("Name")
     let pass= localStorage.getItem("password")

     if(inname==""){
        errname.innerHTML="plese enter name"
        return false
     }
     else if(inpass==""){
        errpass.innerHTML="plese enter password"
        return false
     }
    



     if(inname==name && inpass==pass){

        location.href="home.html"
        return false


     }

    else{
        alert("wrong password")
    }

    return false
}
    var typed = new Typed('#element', {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });