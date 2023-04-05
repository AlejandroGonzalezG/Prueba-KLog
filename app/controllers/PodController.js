const { Pod } = require('../database/db')

const getPods = async (req, res) => {
    try {
        const pods = await Pod.findAll()
        res.json(pods)
    } catch (error){
        res.json({ message: "Se ha producido un error"})
    }
}


const postPod = async (req, res) => {
    try {
        const podExists = await Pod.findOne({ where: { locode : req.body.locode}})
        if (podExists){
            return res.json({ message : "El Pod ya existe, por favor ingresar uno que no exista"})
        }
        const pod = await Pod.create({
            name : req.body.name,
            locode : req.body.locode,
            longitude : req.body.longitude,
            latitude : req.body.latitude
        })
        res.json({ message : "El Pod se ha creado de forma existosa", pod})
    } catch (error) {
        res.json({ message : "Ha ocurrido un error al crear un nuevo Pod"})
    }    
}

module.exports = {
    getPods,
    postPod
}