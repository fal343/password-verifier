function validatePassword(password) {
    let unmetConditionsArray = []
    let isPasswordValid;
    let conditionCounter = 5

    if (password == null) {
        unmetConditionsArray.push('Invalid password: Password is null')
        conditionCounter -= 1
    }
    if (password.length <= 9) {
        unmetConditionsArray.push('Invalid password: Must be longer than eight characters')
        conditionCounter -= 1
    }
    if (/(?=.*[A-Z])/gm.test(password) === false) {
        unmetConditionsArray.push('Invalid password: Must have at least one uppercase letter')
        conditionCounter -= 1
    }
    if (/(?=.*[a-z])/gm.test(password) === false) {
        unmetConditionsArray.push('Invalid password: Must have at least one lowercase letter')
        conditionCounter -= 1
    }
    if (/(?=.*[0-9])/gm.test(password) === false) {
        unmetConditionsArray.push('Invalid password: Must have at least one number')
        conditionCounter -= 1
    }

    if (3 <= conditionCounter) {
        isPasswordValid = true
    } else {
        isPasswordValid = false
    }

    if (unmetConditionsArray.includes('Invalid password: Must have at least one lowercase letter') === true) {
        isPasswordValid = false
    }

    let returnObject = {
        'unmetConditionsArray' : unmetConditionsArray,
        'conditionsPassed' : conditionCounter,
        'isPasswordValid' : isPasswordValid
    }

    return returnObject
}

module.exports = validatePassword
