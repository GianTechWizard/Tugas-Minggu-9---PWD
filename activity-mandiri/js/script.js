function fn_ValForm() {
  var sMsg = "";
  var email = document.getElementById("email").value;

  if (document.getElementById("name").value == "") {
    sMsg += "You have not entered a name";
  }
  if (email == "") {
    sMsg += "You have not entered your email address.";
  }
  if (document.getElementById("message").value == "") {
    sMsg += "You have not entered a message";
  }

  if (email !== "") {
    var regex =
      /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    if (!regex.test(email)) {
      sMsg += "Invalid email format";
    }
  }

  if (sMsg != "") {
    alert("WARNING:" + sMsg);
    return false;
  } else {
    return true;
  }
}
