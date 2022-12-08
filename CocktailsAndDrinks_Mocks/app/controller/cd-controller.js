

const ping = (req, resp) => resp.status(200).send({'msg': 'pong'});

module.exports = {
    ping
}