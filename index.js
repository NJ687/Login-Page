Email = document.getElementById("email-input");
Password = document.getElementById("password-input");


function Login()
{
    let password = Password.value;
    let email = "" + Email.value;
    if(email.endsWith("@gmail.com"))
        alert(`Successfully logged in with \nEmail: ${Email.value} \nPassword: ${Password.value}`);
    else
        alert("Email does not end with @gmail.com \nPlease try again!");
}

function Forgot()
{
    alert("You forgot your password!");
}
