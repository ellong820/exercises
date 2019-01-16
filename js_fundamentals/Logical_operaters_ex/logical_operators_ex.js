result =  ( a+ b < 4) ? 'Below' : 'Over'

// Logical operaters


// Check the login
// importance: 3
// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled.”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled.”

let userName = prompt('Who is there', '')

if (userName =='Admin') {
    let passWord = prompt('Password', '');
    if (passWord =='TheMaster') {
        alert('Welcome!');    
    } else if (passWord == '' || passWord == null) {
        alert('cancelled');
    } else {
        alert('Wrong Password') 
    }
}
    else if(userName == '' || userName == null) {
        alert('cancelled');
    } else {
        alert("I don't know you");
    }
