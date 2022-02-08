const validatePassword = require('../validatePassword')

describe('Test Jest', () => {
    test('should test that true === true', () => {
        expect(true).toBe(true)
    })
})

describe('Test validatePassword', () => {
    test('should return a string if invalid', () => {
        expect(typeof validatePassword('H3t3')).toBe('string')
    })
    test('It should return invalid if password is less than eight characters', () => {
        expect(validatePassword('GC$5D')).toBe('Invalid password: Must be longer than eight characters')
    })
    test('Password should have at least one uppercase Letter', () => {
        expect(validatePassword('mdkejs23ds')).toBe('Invalid password: Must have at least one uppercase letter')
    })
    test('Password should have one lowercase letter at least', () => {
        expect(validatePassword('MDKEJS$12')).toBe('Invalid password: Must have at least one lowercase letter')
    })
    test('Password should have at least one number', () => {
        expect(validatePassword('DFERdef$qw')).toBe('Invalid password: Must have at least one number')
    })
    test('Valid passwords should be accepted', () => {
        expect(validatePassword('D152ed1f$qw')).toBe(true)
        expect(validatePassword('Plcd$edq234d')).toBe(true)
    })
})

