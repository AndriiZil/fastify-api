const items = require('../items');

const itemSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    }
}

const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: itemSchema
            }
        }
    },
    handler: function (req, reply) {
        reply.send(items);
    }
}

const getItemOpts = {
    schema: {
        response: {
            200: itemSchema
        }
    },
    handler: function (req, reply) {
        const { id } = req.params;
        const item = items.find(i => i.id === id);
        reply.send(item);
    }
}

function itemRoutes(fastify, options, done) {

    fastify.get('/items', getItemsOpts);

    fastify.get('/items/:id', getItemOpts);

    done();
}

module.exports = itemRoutes;
