
 function checkAccess() {
     let userName = document.getElementById('user').value;
     let userRole =document.getElementById('role').value;
    let hasAccess = false;
    let welcomeMsg = "";
    if(userRole === "admin") {
         welcomeMsg = `${userName} Welcome to the admin access!`;
        hasAccess = true;
        console.log(welcomeMsg);
    } 
    else if(userRole === "user") {
        hasAccess = false;
         welcomeMsg = `${userName} Welcome to the user access!`;
        hasAccess = true;  
        console.log(welcomeMsg);
    }
    else {
        hasAccess = false;
         welcomeMsg = `${userName} You do not have access!`;
         console.log(welcomeMsg);
    }
    console.log(`Has Access: ${hasAccess}`);
    document.getElementById('WelcomeMsg').innerText = welcomeMsg;
    document.getElementById('hasaccess').innerText = `Has Access: ${hasAccess}`;
 }
 