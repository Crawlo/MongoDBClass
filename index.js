const extend = require('./interface')
const mongodb = require('mongodb')

const IDRegex = /^[0-9a-fA-F]{24}$/

class MongoDB extends extend(mongodb) {
    static configureFor() {
        // get the arguments as Array
        const args = Array.from(arguments),
            // get name of connection from the first argument
            name = args.shift(),
            // get the database name from last argument
            database = args.pop() || 'test',
            // url and options
            [url = 'mongodb://localhost:27017', options] = args
        return mongodb.MongoClient.connect.apply(mongodb.MongoClient, [url, options]).then(
            connection =>
            super.configureFor(name, connection.db(database))
        )
    }
}

module.exports = MongoDB
module.exports = {
    IDRegex
}
module.exports = mongodb