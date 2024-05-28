const logger = (req, res, next) => {
    const {method, url} = req;
    console.log(method, url, new Date());
    next();
}

module.exports = logger;
