function getObj() {
    var username = document.getElementById("user").value
    var password = document.getElementById("pwd").value
    
    if(username == "admin" && password == "admin"){
        document.getElementById("admin-text").style.display = "block";
        setTimeout(function(){document.getElementById("admin-text").style.display = "none";},2000)
        document.getElementById("user").value='';
        document.getElementById("pwd").value='';
        return
    }
    else if(username == "user" && password == "user"){
        document.getElementById("user-text").style.display = "block";
        setTimeout(function(){document.getElementById("user-text").style.display = "none";},2000)
        document.getElementById("user").value='';
        document.getElementById("pwd").value='';
        return
    }
    else if(username == "" && password == ""){
        document.getElementById("required-user").style.display = "block";
        document.getElementById("required-pass").style.display = "block";
        setTimeout(function(){document.getElementById("required-user").style.display = "none";},2000)
        setTimeout(function(){document.getElementById("required-pass").style.display = "none";},2000)
        return
    }
    else if(password == ""){
        document.getElementById("required-pass").style.display = "block";
        setTimeout(function(){document.getElementById("required-pass").style.display = "none";},2000)
        return
    }
    else if(username == ""){
        document.getElementById("required-user").style.display = "block";
        setTimeout(function(){document.getElementById("required-user").style.display = "none";},2000)
        return
    }
    alert("Incorrect username or password");
    document.getElementById("user").value='';
    document.getElementById("pwd").value='';

}