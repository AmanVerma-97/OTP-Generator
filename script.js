//OTP Generation Script

const digit4 = document.getElementById("digit4");
const digit6 = document.getElementById("digit6");
const showOtp = document.getElementById("show-otp");

//OTP Validation Script
const otpInput = document.getElementById("otp-input");
const validateOtpButton = document.getElementById("otp-confirm-btn");
const otpMessage = document.getElementById("otp-message");


digit4.addEventListener("click", function() {
    const otp4 = generateOTP(4);
    showOtp.innerHTML = `Your 4-digit OTP is: ${otp4}`;
});

digit6.addEventListener("click", function() {
    const otp6 = generateOTP(6);
    showOtp.innerText = `Your 6-digit OTP is: ${otp6}`;
});

let otp = '';
function generateOTP(length) {
    
    const characters = '0123456789';
    otp = '';
    otpMessage.innerText = ''; // Clear previous messages
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }
    
    // alert(`Your OTP is: ${otp}`);
    otpInput.focus(); // Focus on the OTP input field
    return otp;
}


validateOtpButton.addEventListener("click", function() {
    const enteredOtp = otpInput.value;
    if(!otp){
        otpMessage.innerText = "Please generate an OTP first.";
        otpMessage.style.color = "gray";
        showOtp.innerText = '';
        return; // Exit if no OTP has been generated
    }
    if (enteredOtp === otp) {
        // alert("OTP is valid!");
        otpMessage.innerText = "OTP validated successfully!";
        otpMessage.style.color = "green";
    } else {
        // alert("Invalid OTP. Please try again.");
        otpMessage.innerText = "Invalid OTP. Please try again.";
        otpMessage.style.color = "red";
    }
    
    // Clear the input field after validation
    otpInput.value = '';
    showOtp.innerText = ''; // Clear the OTP display
    otp = ''; // Reset the OTP variable
});
