const connection = require('../infra/connection')

class VideoModel {

    get(response) {
        const sql = `
        SELECT * 
        FROM Video
        ORDER BY id DESC;
        `
        connection.query(sql, (error, result) => {
            if (error) { response.status(404).json(error) }
            else { response.json(result.rows) }
        })
    }

    add(video, response) {
        const sql = `
        INSERT INTO Video(name, time, date, url, track)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;`
        connection.query(sql, [video.name, video.time, video.date, video.url, video.track], (error, result) => {
            if (error) { response.status(400).json(error) }
            else { response.status(201).json(result.rows) }
        })
    }

    edit(id, values, response) {
        const sql = `
        UPDATE Video 
        SET name=$1, time=$2, date=$3, url=$4, track=$5
        WHERE id=$6
        RETURNING *;
        `
        connection.query(sql, [values.name, values.time, values.date, values.url, values.track, id], (error, result) => {
            if (error) { response.status(400).json(error) }
            else { response.status(201).json(result.rows) }
        })
    }

    remove(id, response) {
        const sql = `
        DELETE FROM Video
        WHERE id = ${id}
        RETURNING *;
        `
        connection.query(sql, (error, result) => {
            if (error) { response.status(400).json(error) }
            else { response.status(201).json(result.rows) }
        })
    }
}

module.exports = new VideoModel