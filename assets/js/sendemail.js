function sendMail(contactForm) {
    emailjs.send("service_hbfvznd","discover_vietnam", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function() {
            let emailSent = document.getElementById("send-button");
            emailSent.style.backgroundColor = "#e7a375";
            emailSent.innerHTML = "Sent!";
        },
        function(error) {
            alert("I'm sorry, something went wrong. Please make sure that all your details are correct and try again.", error);
        }
    );
    document.getElementById("contactForm").reset();
    return false;
}