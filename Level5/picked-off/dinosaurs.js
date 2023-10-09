function dino(req, res, next) {
    const oldBody = req.body.thing
    console.log(oldBody)
    req.body = {thing : `${oldBody}osaur`}
    next()
}

module.exports = dino

