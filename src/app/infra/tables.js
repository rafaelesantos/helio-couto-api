class Tables {

    init(connection) {
        console.log('Init tables')
        this.connection = connection
        this.createCourses()
    }

    createCourses() {

        const sql = `
        CREATE TABLE IF NOT EXISTS Category (
            id SERIAL,
            name VARCHAR NOT NULL,
            description VARCHAR NOT NULL,
            image VARCHAR NOT NULL,
            courses INTEGER [],
            PRIMARY KEY (id)
        );
        CREATE TABLE IF NOT EXISTS Video (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            time VARCHAR NOT NULL,
            date VARCHAR NOT NULL,
            url VARCHAR NOT NULL,
            track INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS Course (
            id SERIAL,
            name VARCHAR NOT NULL,
            description VARCHAR NOT NULL,
            image VARCHAR NOT NULL,
            price NUMERIC NOT NULL,
            time VARCHAR NOT NULL,
            status BOOLEAN NOT NULL,
            date VARCHAR NOT NULL,
            videos INTEGER [],
            PRIMARY KEY (id)
        );
        `
        this.connection.query(sql, (error, result) => {
            if (error) { console.log(error) }
            else { console.log('Course and Video table created successfully') }
        })
    }
}

module.exports = new Tables