const axios = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Leandro' }
        user['lastName'] = 'Lima'
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(err => 'err' + err)
}

module.exports = functions