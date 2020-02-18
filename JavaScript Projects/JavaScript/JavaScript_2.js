function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["email"].value;
    if (x + y + z == "") {
        alert("Please fill out the form");
        return false;
      }  
    if (x == "") {
      alert("Please fill out your first name");
      return false;
    }
    if (y == "") {
        alert("Please fill out your last name");
        return false;
    }
    if (z == "") {
        alert("Please fill out your email address");
        return false;
    }
  }