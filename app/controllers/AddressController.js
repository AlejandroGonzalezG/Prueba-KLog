const { User, Address } = require('../database/db')


module.exports = {
    async all(req, res){
        let addresses = await Address.findAll({
            attributes: ['street'],
            include: {
                association: 'residente',
                attributes: ['name']
            }
        });
        res.json(addresses)
    }
};