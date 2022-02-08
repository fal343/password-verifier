function validatePassword(password) {
    let isPasswordValid;
    if (password == null) {
        isPasswordValid = 'Invalid password: Passworld is null'
    } else if (password.length <= 9) {
        isPasswordValid = 'Invalid password: Must be longer than eight characters'
    } else if (/(?=.*[A-Z])/gm.test(password) === false) {
        isPasswordValid = 'Invalid password: Must have at least one uppercase letter'
    } else if (/(?=.*[a-z])/gm.test(password) === false) {
        isPasswordValid = 'Invalid password: Must have at least one lowercase letter'
    } else if (/(?=.*[0-9])/gm.test(password) === false) {
        isPasswordValid = 'Invalid password: Must have at least one number'        
    } else {
        isPasswordValid = true
    }

    return isPasswordValid
}


module.exports = validatePassword