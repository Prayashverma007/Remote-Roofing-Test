const { Users } = require('../models').models

async function createUser(email, name , surname) {
    if (!name) {
        return new Error('Name missing')
    }
    
    const newUser = await Users.create({
        email,
        name,
        surname
    })

    const user = await Users.findOne({
        attributes: [
            'email', 'name', 'surname'
        ],
        where: { email: newUser.email },
    })

    await user.save();
    return user
}

module.exports = {
    createUser
}