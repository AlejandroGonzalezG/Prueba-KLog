const { User, Address } = require('../database/db')


module.exports = {
    async all(req, res){
        let users = await User.findAll({
            include: {
                association: "domicilio",
                attributes: ['street']
            }
        });
        res.json(users)
    }
};