import React, { useState, Fragment } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
// import MUIDataTable from "mui-datatables";
import MUIDataTable from "mui-datatables";
import {
  Container,
  Grid,
  Menu,
  Segment,
  Image,
  Header,
  Table,
  Icon,
  Label,
  GridColumn,
  Dropdown,
  Button,
} from "semantic-ui-react";

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

const Labels = [
  "EL FLORIDO",
  "UNIVERSIDAD",
  "TANAMA",
  "MATAMOROS",
  "CERRO DE LAS ABEJAS",
  "BLVD 2000",
];
const datasets = [
  {
    label: "Premium",
    data: [617594, 181045, 153060, 106519, 105162, 95072],
    backgroundColor: [
      "rgba(255, 99, 132, 0.6)",
      "rgba(255, 99, 132, 0.6)",
      "rgba(255, 99, 132, 0.6)",
      "rgba(255, 99, 132, 0.6)",
      "rgba(255, 99, 132, 0.6)",
      "rgba(255, 99, 132, 0.6)",

    ],
  },
  {
    label: "Regular",
    data: [617594, 181045, 153060, 106519, 105162, 95072],
    backgroundColor: [
      "rgba(0, 199, 132, 0.6)",
      "rgba(0, 199, 132, 0.6)",
      "rgba(0, 199, 132, 0.6)",
      "rgba(0, 199, 132, 0.6)",
      "rgba(0, 199, 132, 0.6)",
      "rgba(0, 199, 132, 0.6)",
      "rgba(0, 199, 132, 0.6)",
     
    ],
  },
  {
    label: "Diesel",
    data: [716594, 185045, 356060, 508519, 409162, 196072],
    backgroundColor: [
      "rgba(169, 169, 169, 0.6)",
      "rgba(169, 169, 169, 0.6)",
      "rgba(169, 169, 169, 0.6)",
      "rgba(169, 169, 169, 0.6)",
      "rgba(169, 169, 169, 0.6)",
      "rgba(169, 169, 169, 0.6)",
      "rgba(169, 169, 169, 0.6)",
     

    ],
  },
];

//MUI
const columns = ["Producto", "Marca", "Zona", "Estacion"];

const data = [
  ["Premium", "ARCO", "TIJUANA", "EL FLORIDO"],
  ["Diesel", "ARCO", "TIJUANA", "VIA RAPIDA"],
  ["Regular", "ARCO", "TIJUANA", "VIA RAPIDA"],
  ["REgular", "UNBRANDED", "TIJUANA", "VIA RAPIDA"],
];

const options = {
  filterType: "checkbox",
};

export const Reports = () => {
  const [activeItem, setActiveItem] = useState("tijuana");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
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
          <GridColumn verticalAlign="top" width={8}>
            <Header as="h1">Reportes</Header>
            <MUIDataTable
              title={"Ventas"}
              data={data}
              columns={columns}
              options={options}
            />
          </GridColumn>
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
      </Grid>

    </div>
  );
};