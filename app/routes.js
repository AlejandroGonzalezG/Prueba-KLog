const express = require('express');
const router = express.Router();

// Importar controladores

const TransporteController = require('./controllers/TransporteController');
const CarrierController = require('./controllers/CarrierController')
const PolController = require('./controllers/PolController')
const PodController = require('./controllers/PodController')

// Home
router.get('/', (req, res) => res.json({ 
    message : "Prueba Técnica para KLog",
    endpoints: "/transportes, /carriers, /pols, /pods"}));

// Transportes
router.get('/transportes', TransporteController.getTransportes)
router.get('/transportes/itinerario', TransporteController.getTransporteItinerario)
router.post('/transportes', TransporteController.postTransporte)

// Carrier
router.get('/carriers', CarrierController.getCarriers)
router.post('/carriers', CarrierController.postCarrier)

// Pol
router.get('/pols', PolController.getPols)
router.post('/pols', PolController.postPol)

// Pod
router.get('/pods', PodController.getPods)
router.post('/pods', PodController.postPod)


module.exports = router;