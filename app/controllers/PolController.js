const { Pol } = require('../database/db')

const getPols = async (req, res) => {
    try {
        const pols = await Pol.findAll()
        res.json(pols)
    } catch (error){
        res.json({ message: "Se ha producido un error", error})
    }
}


const postPol = async (req, res) => {
    try {
        const polExists = await Pol.findOne({ where: { locode : req.body.locode}})
        if (polExists){
            return res.json({ message : "El Pol ya existe, por favor ingresar uno que no exista"})
        }
        const pol = await Pol.create({
            name : req.body.name,
            locode : req.body.locode,
            longitude : req.body.longitude,
            latitude : req.body.latitude
        })
        res.json({ message : "El Pol se ha creado de forma existosa", pol})
    } catch (error) {
        res.json({ message : "Ha ocurrido un error al crear un nuevo Pol", error })
    }    
}

module.exports = {
    getPols,
    postPol
}