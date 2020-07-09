const { Projects } = require('../models').models

async function createProject(body, name, status) {
    if (!name) {
        return new Error('Name missing')
    }

    const newProject = await Projects.create({
        body,
        name,
        status
    })

    const project = await Projects.findOne({
        attributes: [
            'body', 'name', 'status'
        ],
        where: { name: newProject.name },
    })

    return project
}

module.exports = {
    createProject
}