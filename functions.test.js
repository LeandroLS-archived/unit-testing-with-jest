const functions = require('./functions')
const initDatabase = () => console.log('Database Initialized')
const closeDatabase = () => console.log('Database Closed')
beforeAll(() => initDatabase())
afterAll(() => closeDatabase())
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

test('User should be Leandro Lima object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Leandro', lastName: 'Lima' })
})

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
})

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('Admin shoub be in usernames', () => {
    usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})

test('User feched name should be Leanne Graham', async () => {
    expect.assertions(1)
    await functions.fetchUser().then(data => {
        expect(data.name).toBe('Leanne Graham')
    })
})