const {Router} = require ('express');
const router = Router();


const {getGastos} = require ('../controllers/gastos.controller');

router.route('/')
.get(getGastos)

module.exports = router;
