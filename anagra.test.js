const isAnagram = require('./anagram')
test('isAnagram funcion exists', () => {
    expect(typeof isAnagram).toEqual('function')
})

test('cinema is an anagram of iceman', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('dormitoy is an anagram of dirty room##', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy()
})

test('Hello is not a anagram of aloha', () => {
    expect(isAnagram('Hello', 'aloha')).toBeFalsy()
})