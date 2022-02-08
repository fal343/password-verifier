const validatePassword = require('../validatePassword')

describe('Test Jest', () => {
    test('should test that true === true', () => {
        expect(true).toBe(true)
    })
})

describe('Test validatePassword', () => {
    test('Should return a object if invalid', () => {
        expect(typeof validatePassword('H3t3')).toBe('object')
    })
    test('It should return invalid if password is less than eight characters', () => {
        expect(validatePassword('GC$5D').unmetConditionsArray.includes('Invalid password: Must be longer than eight characters')).toBe(true)
    })
    test('Password should have at least one uppercase Letter', () => {
        expect(validatePassword('mdkejs23ds').unmetConditionsArray.includes('Invalid password: Must have at least one uppercase letter')).toBe(true)
    })
    test('Password should have one lowercase letter at least', () => { 
        expect(validatePassword('MDKEDFJS$12').unmetConditionsArray.includes('Invalid password: Must have at least one lowercase letter')).toBe(true)
    })
    test('Password should have at least one number', () => {
        expect(validatePassword('DFERdef$qw').unmetConditionsArray.includes('Invalid password: Must have at least one number')).toBe(true)
    })
    test('Valid passwords should be accepted', () => {
        expect(validatePassword('D152ed1f$qw').isPasswordValid).toBe(true)
        expect(validatePassword('Plcd$edq234d').isPasswordValid).toBe(true)
    })
})

