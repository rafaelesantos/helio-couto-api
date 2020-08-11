const categoriesController = require('../controllers/categories-controller')
const categoryModel = require('../models/category-model')

module.exports = (app) => {

    const routes = categoriesController.routes()

    app.route(routes.categories)
        .get((request, response) => {
            categoryModel.get(response)
        })
        .post((request, response) => {
            categoryModel.add(request.body, response)
        })
    
    app.route(routes.categoryID)
        .patch((request, response) => {
            const id = parseInt(request.params.id)
            categoryModel.edit(id, request.body, response)
        })
        .delete((request, response) => {
            const id = parseInt(request.params.id)
            categoryModel.remove(id, response)
        })
}