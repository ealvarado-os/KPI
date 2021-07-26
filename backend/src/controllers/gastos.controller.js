const axios = require ('axios');

const lstDatos = {};

lstDatos.getGastos = async (req, res) => {
    const datos = await axios.get('https://portal.grupoeco.com.mx/KPIApi/api/GetGastos');
    res.json(datos.data);
}
module.exports = lstDatos;