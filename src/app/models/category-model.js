const connection = require('../infra/connection')

class CategoryModel {

    get(response) {
        const sql = `
        SELECT *
        FROM Category
        ORDER BY id DESC;
        `
        connection.query(sql, (error, result) => {
            if (error) { response.status(404).json(error) }
            else { response.json(result.rows) }
        })
    }

    add(category, response) {
        const sql = `
        INSERT INTO Category(name, description, image, courses) 
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `
        connection.query(sql, [category.name, category.description, category.image, category.courses], (error, result) => {
            if (error) { response.status(400).json(error) }
            else { response.status(201).json(result.rows) }
        })
    }

    edit(id, values, response) {
        const sql = `
        UPDATE Category
        SET name=$1, description=$2, image=$3, courses=$4
        WHERE id=$5
        RETURNING *;
        `
        connection.query(sql, [values.name, values.description, values.image, values.courses, id], (error, result) => {
            if (error) { response.status(400).json(error) }
            else { response.status(201).json(result.rows) }
        })
    }

    remove(id, response) {
        const sql = `
        DELETE FROM Category
        WHERE id = ${id}
        RETURNING *;
        `
        connection.query(sql, (error, result) => {
            if (error) { response.status(400).json(error) }
            else { response.status(201).json(result.rows) }
        })
    }
}

module.exports = new CategoryModel