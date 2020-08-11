const videosController = require('../controllers/videos-controller')
const videoModel = require('../models/video-model')

module.exports = (app) => {

    const routes = videosController.routes()

    app.route(routes.videos)
        .get((request, response) => {
            videoModel.get(response)
        })
        .post((request, response) => {
            videoModel.add(request.body, response)
        })
    
    app.route(routes.videoID)
        .patch((request, response) => {
            const id = parseInt(request.params.id)
            videoModel.edit(id, request.body, response)
        })
        .delete((request, response) => {
            const id = parseInt(request.params.id)
            videoModel.remove(id, response)
        })
}