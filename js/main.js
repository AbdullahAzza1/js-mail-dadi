    const emails = ["fabio@gmail.com", "paolo@gmail.com", "marco@gmail.com", "abdu@gmail.com"]
    const checkBtm = document.getElementById("check")
    
    console.log(emails.includes('2'));
    
    checkBtm = addEventListener("click", function() {

      const mail = document.getElementById("mail").value
        console.log( emails[mail] );
    });
    

    

    //for (let i = 0; i < emails.length; i++) {
    //const mail = emails [i]; 
    //if (mail%3 == 0) {
    //    console.log(mail);
    //}
    
    
//}