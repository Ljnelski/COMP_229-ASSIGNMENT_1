let button = document.getElementById("button");
console.log(button);

button.onclick = function(){
    let formValues = [
        document.getElementById("fname"),
        document.getElementById("lname"),
        document.getElementById("email"),
        document.getElementById("subject"),
        document.getElementById("body")
    ]
    
    formValues.forEach(element => { console.log(element) });  
  
    window.location.href = "/home";  
}


/**/