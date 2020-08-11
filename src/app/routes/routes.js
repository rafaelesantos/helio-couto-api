const coursesRoutes = require('./courses-routes')
const videosRoutes = require('./videos-routes')
const categoriesRoutes = require('./categories-routes')

module.exports = (app) => {
    coursesRoutes(app)
    videosRoutes(app)
    categoriesRoutes(app)
}