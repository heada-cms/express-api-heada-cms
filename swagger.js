const swaggerAutogen = require('swagger-autogen')()

const outputFile = './docs/swagger_output.json'
const endpointsFiles = ['./index.ts'];

const doc = {
    consumes: ['application/json'],
    produces: ['application/json'],
    basePath: '/api',
    definitions: {
        Template: {
            _id: "6feda32",
            name: 'Temperature',
            schema: 'any possible JSON in mongoose syntax',
            authorization: {
                read: true,
                create: false,
                update: true,
                delete: true
            }
        },
        createTemplate: {
            name: 'Temperature',
            schema: 'any possible JSON in mongoose syntax',
            authorization: {
                read: true,
                create: false,
                update: true,
                delete: true
            }
        },
        updateTemplate:  {
            name: 'Temperature',
            schema: 'any possible JSON in mongoose syntax',
            authorization: {
                read: true,
                create: false,
                update: true,
                delete: true
            }
        },
        user: {
            username: "john_doe",
            password: "password",
            admin: true,
            roles: {
                role: false
            }
        },
        apiKey: {
            operation: {
                read: true,
                create: false,
                update: true,
                delete: false
            }, 
            key: "key"
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc);