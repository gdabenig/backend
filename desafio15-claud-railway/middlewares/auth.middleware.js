const authMiddleware = (req, res, next) => {
    console.log(req.session)
    if (!req.session?.username || !req.session?.admin) {
        return res.status(401).send('<h1>No estas autorizado a ingresar </h1>')
    }
    next()
}

module.exports = {
    authMiddleware
}