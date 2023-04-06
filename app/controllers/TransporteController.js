const { Transporte, Pod, Pol } = require('../database/db');



const getTransportes = async (req, res) => {
    const transportes = await Transporte.findAll({
        attributes: ['id', 'etd', 'eta', 'transit_time',],
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


const getTransporteItinerario = async (req, res) => {
    try {
        if(req.body.destino){
            const destino = await Pod.findOne({ 
                where: { locode: req.body.destino}, 
                attributes: ['locode'],
                include: {
                    association: 'transporte',
                    attributes: ['eta', 'etd'],
                    include: [{
                        association: 'pol',
                        attributes: ['locode']
                    }, {
                        association: 'carrier',
                        attributes: ['scac']
                    }]
                }
               })
            return res.json({ Origen: destino.transporte[0].pol.locode, Destino: destino.locode, Naviera: destino.transporte[0].carrier.scac ,ETA: destino.transporte[0].eta, ETD: destino.transporte[0].etd })
        }if(req.body.origen){
            const origen = await Pol.findOne({ 
                where: { locode: req.body.origen}, 
                attributes: ['locode'],
                include: {
                    association: 'transporte',
                    attributes: ['eta', 'etd'],
                    include: [{
                        association: 'pod',
                        attributes: ['locode']
                    }, {
                        association: 'carrier',
                        attributes: ['scac']
                    }]
                }
               })
            return res.json({ Origen: origen.locode , Destino: origen.transporte[0].pod.locode, Naviera: origen.transporte[0].carrier.scac ,ETA: origen.transporte[0].eta, ETD: origen.transporte[0].etd })
        }if(req.body.eta){
            const eta = await Transporte.findOne({
                where: { eta : req.body.eta},
                attributes: ['eta', 'etd'],
                include: [{
                    association: 'carrier',
                    attributes: ['scac']
                }, {
                    association: 'pol',
                    attributes: ['locode']
                }, {
                    association: 'pod',
                    attributes: ['locode']
                }]
            })
            return res.json({ Origen : eta.pol.locode, Destino : eta.pod.locode, Naviera : eta.carrier.scac, ETD : eta.etd, ETA : eta.eta })
        }if(req.body.transit_time){
            const transit_time = await Transporte.findOne({
                where: { transit_time : req.body.transit_time},
                attributes: ['eta', 'etd'],
                include: [{
                    association: 'carrier',
                    attributes: ['scac']
                }, {
                    association: 'pol',
                    attributes: ['locode']
                }, {
                    association: 'pod',
                    attributes: ['locode']
                }]
            })
            return res.json({ Origen : transit_time.pol.locode, Destino : transit_time.pod.locode, Naviera : transit_time.carrier.scac, ETD : transit_time.etd, ETA : transit_time.eta })
        }
        
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
    getTransporteItinerario,
    postTransporte
};