const { Carrier } = require('../database/db')

const getCarriers = async (req, res) => {
    try {
        const carrier = await Carrier.findAll()
        res.json(carrier)
    } catch (error){
        res.json({ message: "Se ha producido un error", error})
    }
}


const postCarrier = async (req, res) => {
    try {
        const carrierExists = await Carrier.findOne({ where: { scac : req.body.scac}})
        if (carrierExists){
            return res.json({ message : "El Carrier ya existe, por favor ingresar uno que no exista"})
        }
        const carrier = await Carrier.create({
            short_name : req.body.short_name,
            official_name : req.body.official_name,
            scac : req.body.scac
        })
        res.json({ message : "El Carrier se ha creado de forma existosa", carrier})
    } catch (error) {
        res.json({ message : "Ha ocurrido un error al crear un nuevo Carrier", error})
    }    
}

module.exports = {
    getCarriers,
    postCarrier
}