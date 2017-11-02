let birds = [{
    id: 1,
    bird: 'Kakapo'
}, {
    id: 2,
    bird: 'Red-billed oxpecker'
}, {
    id: 3,
    bird: 'Shoebill'
}, {
    id: 4,
    bird: 'Crab-plover'
}]

module.exports = {
    getBirds(req, res) {
        // Just send back all birds
        res.status(200).send(birds)
    },
    getBirdById(req, res) {
        // Remember to use parseInt() on the id sent as a URL parameter. A number added to the URL will be turned into a string.
        const id = parseInt(req.params.id);
        // filter over the birds array and find the bird with the id that matches the id sent in the url.
        const birdToSend = birds.filter( bird => bird.id === id);
        // birdToSend is an array with one bird object in it.
        res.status(200).send(birdToSend[0])
    }
}