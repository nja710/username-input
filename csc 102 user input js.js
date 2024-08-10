function checkcreds()
{
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    

    if (username.length > 7 || username.length < 3)
    {
        document.getElementById("logincheck").innerHTML= "username or password is invalid"
    }
    else if (password.length < 5 || password.length > 8)
{
document.getElementById("logincheck").innerHTML= "username or password is invalid"
}
else
{
    alert("thank you for entering my website");
    location.replace("https://donut.media/");
}
}