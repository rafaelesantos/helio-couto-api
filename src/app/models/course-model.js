const connection = require('../infra/connection')

class CourseModel {

    get(response) {
        const sql = `
        SELECT *
        FROM Course
        ORDER BY id DESC;
        `
        connection.query(sql, (error, result) => {
            if (error) { response.status(404).json(error) }
            else { response.json(result.rows) }
        })
    }

    add(course, response) {
        const sql = `
        INSERT INTO Course(name, description, image, price, time, status, date, videos)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
        `
        connection.query(sql, [course.name, course.description, course.image, course.price, course.time, course.status, course.date, course.videos], (error, result) => {
            if (error) { response.status(400).json(error) }
            else { response.status(201).json(result.rows) }
        })
    }

    edit(id, values, response) {
        const sql = `
        UPDATE Course
	    SET name=$1, description=$2, image=$3, price=$4, time=$5, status=$6, date=$7, videos=$8
        WHERE id=$9
        RETURNING *;
        `
        connection.query(sql, [values.name, values.description, values.image, values.price, values.time, values.status, values.date, values.videos, id], (error, result) => {
            if (error) { response.status(400).json(error) }
            else { response.status(201).json(result.rows) }
        })
    }

    remove(id, response) {
        const sql = `
        DELETE FROM Course
        WHERE id = ${id}
        RETURNING *;;
        `
        connection.query(sql, (error, result) => {
            if (error) { response.status(400).json(error) }
            else { response.status(201).json(result.rows) }
        })
    }
}

module.exports = new CourseModel