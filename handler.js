exports.handler = async (event) => {
    const message = process.env.MESSAGE || 'Hello world!'
    return {statusCode: 200, body: message};
}