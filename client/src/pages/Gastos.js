import { Icon } from "@material-ui/core";
import React, { useState } from "react";
import { MUITable } from "../components/MUITable";
import {
  Container,
  Grid,
  Menu,
  Header,
  GridColumn,
  Dropdown,
  Button,
} from "semantic-ui-react";



  const gasto = [{
      Compania: '12',
     NoEstacion: '1',
      Estacion: '1',
    MontoCredito: '1',
     MontoDebito: '1',
     Lote: '1',
    Sitio: '1',
     CuentaContable: '1',
      NoCuenta: '1',
      Descripcion: '1',
      Estado: '1',
      FechaTrans: '1'
 },
  {      Compania: '2',
     NoEstacion: '2',
      Estacion: '2',
      MontoCredito: '1',
      MontoDebito: '1',
      Lote: '1',
      Sitio: '1',
      CuentaContable: '1',
      NoCuenta: '1',
      Descripcion: '1',
      Estado: '1',
      FechaTrans: '1'
  }]

export const Gastos = () => {


  const [gastos, setGastos] = useState(gasto);


  return (        
         <div style={{ margin: 25 }}>
           
            {/* <Gastos />  */}
             <div>
                <br/>
            </div>
           <GridColumn verticalAlign="top" width={8}>
                 <Header as="h1">Gastos</Header>
                 <MUITable title={"Gastos Operativos"} data={gasto} />
            </GridColumn>               
        </div>

      
  )
}

