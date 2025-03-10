$(document).ready(function() {
    $('#signupButton, #loginButton').click(function(e) {
        e.preventDefault();

        let isLogin = $(this).attr('id') === 'loginButton';
        let invalidField = null;

        if (isLogin) {
            invalidField = validateLogin();
        } else {
            invalidField = validateSignup();
        }

        if (invalidField === true) {
            $('#loader').show();

            if (isLogin) {
                $('#loginForm').submit();
                setTimeout(function() {
                    window.location.href = '/Pocket-Med/HomeApp/index.html';
                }, 2000);
            } else {
                $('#signupForm').submit();
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 2000);
            }
        } else if (invalidField) {
            invalidField.focus(); // Focus on the invalid field
        }
    });

    function validateLogin() {
        let invalidEmail = validateLoginEmail();
        if (invalidEmail !== true) return invalidEmail;

        let invalidPassword = validateLoginPassword();
        if (invalidPassword !== true) return invalidPassword;

        return true;
    }

    function validateSignup() {
        let invalidEmail = validateSignupEmail();
        if (invalidEmail !== true) return invalidEmail;

        let invalidPassword = validateSignupPassword();
        if (invalidPassword !== true) return invalidPassword;

        let invalidConfirm = validateConfirmPassword();
        if (invalidConfirm !== true) return invalidConfirm;

        let invalidMobile = validateMobileNumber();
        if (invalidMobile !== true) return invalidMobile;

        let invalidDob = validateDob();
        if (invalidDob !== true) return invalidDob;

        let invalidBlood = validateBloodGroup();
        if (invalidBlood !== true) return invalidBlood;

        return true;
    }

    function validateLoginEmail() {
        if (!$('#loginEmail').val()) {
            Swal.fire({ icon: 'error', title: 'Login Error', text: 'Please enter your email.' });
            return $('#loginEmail'); // Return the invalid field
        }
        return true;
    }

    function validateLoginPassword() {
        if (!$('#loginPassword').val()) {
            Swal.fire({ icon: 'error', title: 'Login Error', text: 'Please enter your password.' });
            return $('#loginPassword'); // Return the invalid field
        }
        return true;
    }

    function validateSignupEmail() {
        if (!$('#signupEmail').val()) {
            Swal.fire({ icon: 'error', title: 'Signup Error', text: 'Please enter your email.' });
            return $('#signupEmail'); // Return the invalid field
        }
        return true;
    }

    function validateSignupPassword() {
        if (!$('#signupPassword').val()) {
            Swal.fire({ icon: 'error', title: 'Signup Error', text: 'Please enter your password.' });
            return $('#signupPassword'); // Return the invalid field
        }
        return true;
    }

    function validateConfirmPassword() {
        if (!$('#confirmPassword').val()) {
            Swal.fire({ icon: 'error', title: 'Signup Error', text: 'Please confirm your password.' });
            return $('#confirmPassword'); // Return the invalid field
        } else if ($('#signupPassword').val() !== $('#confirmPassword').val()) {
            Swal.fire({ icon: 'error', title: 'Signup Error', text: 'Passwords do not match.' });
            return $('#confirmPassword'); // Return the invalid field
        }
        return true;
    }

    function validateMobileNumber() {
        if (!$('#mobileNumber').val()) {
            Swal.fire({ icon: 'error', title: 'Signup Error', text: 'Please enter your mobile number.' });
            return $('#mobileNumber'); // Return the invalid field
        }
        return true;
    }

    function validateDob() {
        if (!$('#dob').val()) {
            Swal.fire({ icon: 'error', title: 'Signup Error', text: 'Please enter your date of birth.' });
            return $('#dob'); // Return the invalid field
        }
        return true;
    }

    function validateBloodGroup() {
        if ($('#bloodGroup').val() === 'Select your blood group') {
            Swal.fire({ icon: 'error', title: 'Signup Error', text: 'Please select your blood group.' });
            return $('#bloodGroup'); // Return the invalid field
        }
        return true;
    }
});