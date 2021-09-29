const fastify = require('fastify')({ legger: true });

const PORT = 5000;

fastify.register(require('./routes/items'));

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start().catch(console.error);
