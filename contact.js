    // Contact Form Validation
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector(".contact-form");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent immediate submission

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic validation
            if (name === "" || email === "" || message === "") {
                alert("⚠️ Please fill in all fields before submitting.");
                return;
            }

            // Email format validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("⚠️ Please enter a valid email address.");
                return;
            }

            // Success message
            alert("✅ Thank you, " + name + "! Your message has been sent.");
            form.reset(); // Clear the form
        });
    });
