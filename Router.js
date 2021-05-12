var Request = require("request");
var url = 'http://localhost:8000/api'
//var url = 'https://portal.grupoeco.com.mx/sirexa/api/'

class Router {

    constructor(App) {

        this.GetComisiones(App);

    }

    GetComisiones(App) {

        App.post('/GetComisiones', (req, res) => {

            try {

                const u = req.session.User;

                Request.get({
                    "headers": { "content-type": "application/json" },
                    "url": `${url}/GetComisionByUsrKey?UsrKey=${u.Llave}`,
                    body: JSON.stringify(u),
                }, (error, response, body) => {

                    if (error) {

                        res.json({
                            success: false,
                            msg: error
                        });

                        return false;

                    }

                    if (body) {

                        const apiRes = JSON.parse(body);

                        res.json({
                            success: true,
                            data: apiRes
                        });

                    } else {

                        res.json({
                            success: false,
                        });

                    }

                });

            } catch (e) {

                res.json({
                    success: false,
                    msg: e
                });

            }
        });

    }
}

module.exports = Router;