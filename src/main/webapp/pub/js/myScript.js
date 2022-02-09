function validate_fullName() {
    if (document.ContactForm.fullName.value == "") {
        alert("Please provide your full name!");
        document.ContactForm.fullName.focus();
        return false;
    } else {
        var NAME = document.getElementById("fname").value;
        var NameRe = /^[A-Z][a-z]+\s[A-Z][A-Z'\-a-z]+$/;

        if (NameRe.test(NAME)) {
             return true;
        } else {
            alert("Invalid full name format! It should be like 'Ahlam Ebjad' format");
            document.ContactForm.fullName.focus();
            return false;
        }
    }

}