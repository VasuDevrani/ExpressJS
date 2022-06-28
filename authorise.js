const authorise = (req, res, next) => {
    console.log('authorise')
    next()
}

const createUser = (req, res, next) => {
    console.log('user creates');
    next()
}

module.exports = ({authorise, createUser});