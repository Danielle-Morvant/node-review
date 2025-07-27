console.log("hey yall!");




function validateEmail(email) {
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return emailRegex.test(email);
}

console.log(validateEmail("example@example.com")); // true
console.log(validateEmail("invalid-email"));       // false




function hidePhoneNumber(text) {
   const phoneNumber = "(123) 456-7890";

   // Masking all digits except the last four
   const maskedNumber = phoneNumber.replace(/(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})/, "***-***-$3");


   console.log(maskedNumber('(543) 453-7890)')); // Output: ***-***-7890

}