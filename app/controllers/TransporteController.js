const { Transporte, Pod } = require('../database/db')


const getTransportes = async (req, res) => {
    const transportes = await Transporte.findAll({
        attributes: ['id', 'etd', 'eta', 'transit_time'],
        include: [{
            association: 'carrier',
            attributes: ['id', 'short_name', 'official_name', 'scac']
        }, {
            association: 'pol',
            attributes: ['id', 'name', 'locode', 'longitude', 'latitude']
        }, {
            association: 'pod',
            attributes: ['id', 'name', 'locode', 'longitude', 'latitude']
        }]
    });
    res.json(transportes)
}


const getTransporteDestino = async (req, res) => {
    try {
        const origen = await Pod.findOne({ 
            where: { locode: req.body.origen}, 
            attributes: ['locode'],
           })
        res.json({ Origen: origen.locode,})
    } catch (error) {
        res.json({ message: "Ha ocurrido un error"})
    }
}

const postTransporte = async (req, res) => {
    try {
        const nuevoViaje = await Transporte.create({
           carrier_id : req.body.carrier_id,
           pol_id : req.body.pol_id,
           pod_id : req.body.pod_id,
           etd : req.body.etd,
           eta : req.body.eta,
           transit_time : req.body.transit_time,
        })
        res.json({ message : 'Se ha creado el nuevo itinerario sin problemas'})
    } catch (error){
        res.json({ message: error})
    }
}

module.exports = {
    getTransportes,
    getTransporteDestino,
    postTransporte
};