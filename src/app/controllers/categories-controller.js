class CategoriesController {   

    routes() {
        return {
            categories: '/categories',
            categoryID: '/category/:id'
        }
    }
}

module.exports = new CategoriesController