
// URL parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Ruser = urlParams.get('username')
const Rpass = urlParams.get('password1')

window.onload = pageLoad;
function pageLoad(){
	var loginform = document.getElementById("myLogin");
    loginform.onsubmit = ChekLogin;
}

function ChekLogin() {
    var User = document.forms["myLogin"]["Lusername"].value;
    var Pass = document.forms["myLogin"]["Lpassword"].value;

    if (User != Ruser) {
        alert("Wrong Username");
        return false;
    }
    else if (Pass != Rpass) {
        alert("Wrong Password");
        return false;
    }
    else if (User == Ruser && Pass == Rpass) {
        alert("Success");
    }
}