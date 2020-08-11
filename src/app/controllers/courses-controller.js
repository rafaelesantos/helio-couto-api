class CoursesController {   

    routes() {
        return {
            courses: '/courses',
            courseID: '/course/:id'
        }
    }
}

module.exports = new CoursesController
