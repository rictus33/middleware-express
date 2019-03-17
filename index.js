let config = function (req, res, next){
    console.log('Coucou');
    next();
}

module.exports = config;