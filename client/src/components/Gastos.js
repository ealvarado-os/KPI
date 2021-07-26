import React, { Component } from 'react'
import axios from 'axios'

export default class Gastos extends Component {

    state = {
        gastosArray: []
    }

    async componentDidMount() {
        this.getGastos();
    }

    async getGastos() {
        const res = await axios.get('http://localhost:4000/api/gastos')
        this.setState({ gastosArray: res.data })
    }

    render() {

        var i = 0;

        return (
            <div style={{ margin: 25 }}>
                <div className="row">
                    <table id='tblGastos' className="table table-striped table-hover table-dark table-bordered">
                        <thead>
                            <tr>
                                <th>Compañia</th>
                                <th>NoEstacion</th>
                                <th>Estación</th>
                                <th>Monto crédito</th>
                                <th>Monto débito</th>
                                <th>Lote</th>
                                <th>Sitio</th>
                                <th>Cuenta contable</th>
                                <th>No. Cuenta</th>
                                <th>Descripción</th>
                                <th>Estado</th>
                                <th>Fecha de transacción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.gastosArray.map(el => {
                                    return (
                                        <tr key={i++}>
                                            <td>{el.Compania}</td>
                                            <td>{el.NoEstacion}</td>
                                            <td>{el.Estacion}</td>
                                            <td>{el.MontoCredito}</td>
                                            <td>{el.MontoDebito}</td>
                                            <td>{el.Lote}</td>
                                            <td>{el.Sitio}</td>
                                            <td>{el.CuentaContable}</td>
                                            <td>{el.NoCuenta}</td>
                                            <td>{el.Descripcion}</td>
                                            <td>{el.Estado}</td>
                                            <td>{el.FechaTrans}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}