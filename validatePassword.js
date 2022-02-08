function validatePassword(password) {
    let unmetConditionsArray = []
    let isPasswordValid;
    if (password == null) {
        unmetConditionsArray.push('Invalid password: Password is null')
    } else if (password.length <= 9) {
        unmetConditionsArray.push('Invalid password: Password is null')
    } else if (/(?=.*[A-Z])/gm.test(password) === false) {
        unmetConditionsArray.push('Invalid password: Password is null')
    } else if (/(?=.*[a-z])/gm.test(password) === false) {
        unmetConditionsArray.push('Invalid password: Password is null')
    } else if (/(?=.*[0-9])/gm.test(password) === false) {
        isPasswordValid = 'Invalid password: Must have at least one number'        
    } else {
        isPasswordValid = true
    }

    let returnObject = {
        'unmetConditionsArray' : unmetConditionsArray,
        'isPasswordValid' : isPasswordValid
    }

    return returnObject
}


module.exports = validatePassword