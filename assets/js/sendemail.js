// Code to email the completed form was found at https://www.emailjs.com/docs/

function sendMail(contactForm) {
    emailjs
        .send("service_hbfvznd", "discover_vietnam", {
            from_name: contactForm.fullname.value,
            from_email: contactForm.emailaddress.value,
            message: contactForm.message.value,
        })
        .then(
            function () {
                $("#success").show();
                function toggleDiv() {
                    setTimeout(function () {
                        $("#success").hide();
                    }, 5000);
                }
                toggleDiv();
            },
            function (error) {
                $("#failed").show();
                function toggleDiv() {
                    // set timeout code was found at https://www.w3schools.com/jsref/met_win_settimeout.asp
                    setTimeout(function () {
                        $("#failed").hide();
                    }, 5000);
                }
                console.log("FAILED...", error);
                toggleDiv();
            }
        );
    document.getElementById("contactForm").reset();
    return false;
}
