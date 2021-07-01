import React, { useState, Fragment, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { MUITable } from "../components/MUITable";
import { Chart } from "../components/Chart"
import {
  Container,
  Grid,
  Menu,
  Header,
  GridColumn,
  Dropdown,
  Button,
} from "semantic-ui-react";
import axios from "axios";

const productsOptions = [
  { key: "Todos", text: "Todos", value: "Todos" },
  { key: "Premiun", text: "Premiun", value: "Premium" },
  { key: "Regular", text: "Regular", value: "Regular" },
  { key: "Diesel", text: "Diesel", value: "Diesel" },
];
const dateOptions = [
  { key: "Enero", text: "Enero", value: "Enero" },
  { key: "Febrero", text: "Febrero", value: "Febrero" },
  { key: "Marzo", text: "Marzo", value: "Marzo" },
  { key: "Abril", text: "Abril", value: "Abril" },
  { key: "Mayo", text: "Mayo", value: "Mayo" },
];

const Labels =
["ZONA BAJA SUR", "ZONA ENSENADA", "ZONA GUAYMAS", "ZONA HERMOSILLO", "ZONA JALISCO", "ZONA MEXICALI ", "ZONA NOGALES", "ZONA OBREGON", "ZONA SAN QUINTIN", "ZONA TIJUANA "]

// [
//   "EL FLORIDO",
//   "UNIVERSIDAD",
//   "TANAMA",
//   "MATAMOROS",
//   "CERRO DE LAS ABEJAS",
//   "BLVD 2000",
// ];
const datasets =
[
{label: "Semana1", data:   [1655599.487, 1055898.066, 510760.933, 835341.594, 76629.573, 2208010.296, 1526542.632, 166819.867, 478737.555, 3302935.835], borderColor: "rgba(227,71,236,0.7)", backgroundColor: "rgba(227,71,236, 0.7)", fill: false}
,{label: "Semana2", data:  [1655599.487, 1055898.066, 510760.933, 835341.594, 76629.573, 2208010.296, 1526542.632, 166819.867, 478737.555, 3302935.835], borderColor: "rgba(135,34,139,0.7)", backgroundColor: "rgba(135,34,139, 0.7)", fill: false}
,{label: "Semana3", data:  [1655599.487, 1055898.066, 510760.933, 835341.594, 76629.573, 2208010.296, 1526542.632, 166819.867, 478737.555, 3302935.835], borderColor: "rgba(36,55,199,0.7)", backgroundColor: "rgba(36,55,199, 0.7)", fill: false}
,{label: "Semana4", data:  [1655599.487, 1055898.066, 510760.933, 835341.594, 76629.573, 2208010.296, 1526542.632, 166819.867, 478737.555, 3302935.835], borderColor: "rgba(12,135,148,0.7)", backgroundColor: "rgba(12,135,148, 0.7)", fill: false}
,{label: "Semana5", data:  [1655599.487, 1055898.066, 510760.933, 835341.594, 76629.573, 2208010.296, 1526542.632, 166819.867, 478737.555, 3302935.835], borderColor: "rgba(20,83,249,0.7)", backgroundColor: "rgba(20,83,249, 0.7)", fill: false}
];
//  [
//   {
//     label: "Premium",
//     data: [617594, 181045, 153060, 106519, 105162, 95072],
//     backgroundColor: [
//       "rgba(255, 99, 132, 0.6)",
//       "rgba(255, 99, 132, 0.6)",
//       "rgba(255, 99, 132, 0.6)",
//       "rgba(255, 99, 132, 0.6)",
//       "rgba(255, 99, 132, 0.6)",
//       "rgba(255, 99, 132, 0.6)",
//     ],
//   },
//   {
//     label: "Regular",
//     data: [617594, 181045, 153060, 106519, 105162, 95072],
//     backgroundColor: [
//       "rgba(0, 199, 132, 0.6)",
//       "rgba(0, 199, 132, 0.6)",
//       "rgba(0, 199, 132, 0.6)",
//       "rgba(0, 199, 132, 0.6)",
//       "rgba(0, 199, 132, 0.6)",
//       "rgba(0, 199, 132, 0.6)",
//       "rgba(0, 199, 132, 0.6)",
//     ],
//   },
//   {
//     label: "Diesel",
//     data: [716594, 185045, 356060, 508519, 409162, 196072],
//     backgroundColor: [
//       "rgba(169, 169, 169, 0.6)",
//       "rgba(169, 169, 169, 0.6)",
//       "rgba(169, 169, 169, 0.6)",
//       "rgba(169, 169, 169, 0.6)",
//       "rgba(169, 169, 169, 0.6)",
//       "rgba(169, 169, 169, 0.6)",
//       "rgba(169, 169, 169, 0.6)",
//     ],
//   },
// ];

//DATA GRAFICA DINAMICA
const LabelsDyn = [];

const datasetsDyn = [];

//funcion que construye grafica de manera dinamica
function chartConstructor(datos) {
  // const datos = JSON.parse(datos);

  //var data
  var data = [];
  //var datasets

  var Props = Object.keys(datos[0]);

  //variables para color de las  lineas graficas
  var r;
  var g;
  var b;


  //CICLO QUE OBTIENE  labels
  for (var j = 1; j < datos.length; j++) {
     LabelsDyn.push(datos[j]["Zona"]);
  }

  //LLENANDO DATASETS PARA CADA ZONA
  for (var i = 0; i < Props.length; i++) {
    r = Math.floor(Math.random() * 255 + 1);
    g = Math.floor(Math.random() * 255 + 1);
    b = Math.floor(Math.random() * 255 + 1);

    if (Props[i] != "Zona") {
      for (let j = 1; j < datos.length; j++) {
        data.push(datos[j][Props[i]]);
      }

      var x = {
        label: Props[i],
        data: data,
        borderColor: "rgba(" + r + "," + g + "," + b + ",0.7)",
        backgroundColor: "rgba(" + r + "," + g + "," + b + ", 0.7)",
        fill: false,
      };
      datasetsDyn.push(x);
      data = [];
    }
  }
}

export const Reports = () => {
  const [activeItem, setActiveItem] = useState("tijuana");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const [dataGraph, setDataGraph] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // getGastos();
    consultaMov();
  }, []);

  const consultaMov = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:9000/api/GetVentas",
        { Opc: 1 }
      );

      if (data) {
        setData(JSON.parse(data));
        chartConstructor(data);
      } else {
        setData([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //funcion que consulta  la API para obtener el datos de gastos
  async function getGastos() {
    try {
      const dataGraph = await axios.get("http://localhost:9000/api/GetGastos", {
        params: { Opc: 1, IdCia: 1 },
      });

      setDataGraph(dataGraph.data);
      return dataGraph;
    } catch (error) {
      alert(error);
      return dataGraph;
    }
  }

  return (
    <div>
      {/* FILTROS */}
      <Grid centered columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Container>
              <Header as="h3">Zona</Header>
              <Dropdown
                placeholder="Zona"
                fluid
                multiple
                selection
                options={productsOptions}
              />
            </Container>
          </Grid.Column>
          <Grid.Column width={4}>
            <Container>
              <Header as="h3">Producto</Header>
              <Dropdown
                placeholder="Producto"
                fluid
                multiple
                selection
                options={productsOptions}
              />
            </Container>
          </Grid.Column>

          <Grid.Column width={4}>
            <Container>
              <Header as="h3">Fecha</Header>
              <Dropdown
                placeholder="Fecha"
                fluid
                multiple
                selection
                options={dateOptions}
              />
            </Container>
          </Grid.Column>
          <Grid.Column verticalAlign="bottom" width={3}>
            <Container>
              <Button primary>Consultar</Button>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid centered>
        <Grid.Row className="ui internally celled grid">
          {/* TABLA DE VENTAS */}
          <GridColumn verticalAlign="top" width={8}>
            <Header as="h1">Reportes</Header>
            <MUITable title={"Ventas"} data={data} />
          </GridColumn>
          {/* GRAFICA ZONAS */}
          <Grid.Column width={7}>
            <Grid.Row className="ui centered" columns={2}>
              <Header as="h1">Reportes</Header>

              <Grid.Column>
                <Menu color="blue" tabular>
                  <Menu.Item
                    name="tijuana"
                    active={activeItem === "tijuana"}
                    onClick={handleItemClick}
                  />
                  <Menu.Item
                    name="tecate"
                    active={activeItem === "tecate"}
                    onClick={handleItemClick}
                  />
                  <Menu.Item
                    name="rosarito"
                    active={activeItem === "rosarito"}
                    onClick={handleItemClick}
                  />
                  <Menu.Item
                    name="ensenada"
                    active={activeItem === "ensenada"}
                    onClick={handleItemClick}
                  />
                </Menu>
              </Grid.Column>
              <Grid.Column width={5}>
                <Bar
                  data={{
                    labels: Labels,
                    datasets: datasets,
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="ui internally celled grid">
          <Grid.Column width={7}>
            <Grid.Row className="ui centered" columns={2}>
              <Header as="h1">Reportes</Header>

              <Grid.Column width={5}>
                <Chart
                  data={data}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
