class VideoController {   

    routes() {
        return {
            videos: '/videos',
            videoID: '/video/:id',
        }
    }
}

module.exports = new VideoController