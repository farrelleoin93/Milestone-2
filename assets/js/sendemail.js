function sendMail(contactForm) {
    emailjs.send("service_hbfvznd","discover_vietnam", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function() {
            let emailSent = document.getElementById("send-button");
            emailSent.style.backgroundColor = "#00cc00";
            emailSent.style.borderColor = "#00cc00";
            emailSent.innerHTML = "Sent!";
            alert("Your email has been sent, a member of our team will be in touch shortly");
        },
        function(error) {
            alert("I'm sorry, something went wrong. Please make sure that all your details are correct and try again.", error);
        }
    );
    document.getElementById("contactForm").reset();
    return false;
}