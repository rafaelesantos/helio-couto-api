const coursesController = require('../controllers/courses-controller')
const courseModel = require('../models/course-model')

module.exports = (app) => {

    const routes = coursesController.routes()

    app.route(routes.courses)
        .get((request, response) => {
            courseModel.get(response)
        })
        .post((request, response) => {
            courseModel.add(request.body, response)
        })
    
    app.route(routes.courseID)
        .patch((request, response) => {
            const id = parseInt(request.params.id)
            courseModel.edit(id, request.body, response)
        })
        .delete((request, response) => {
            const id = parseInt(request.params.id)
            courseModel.remove(id, response)
        })
}