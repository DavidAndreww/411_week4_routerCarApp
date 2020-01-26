import React from "react";
import cars from "../cars.json";
import { Chip } from "@material-ui/core/";
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const Car = props => {
  let id = props.match.params.id - 1;
  let car = cars[id];
  console.log(car);
  return (
    <Container fixed maxWidth="xsit ">
      <Paper elvation={3}>
        <h1>{car.Name}</h1>
        <Chip label={`id: ${car.id}`} />
        <Chip label={`Name: ${car.Name}`} />
        <Chip label={`MPG: ${car.Miles_per_Gallon}`} />
        <Chip label={`Cylinders: ${car.Cylinders}`} />
        <Chip label={`Displacement: ${car.Displacement}`} />
        <Chip label={`Horsepower: ${car.Horsepower}`} />
        <Chip label={`Weight (lbs.): ${car.Weight_in_lbs}`} />
        <Chip label={`Acceleration: ${car.Acceleration}`} />
        <Chip label={`Year: ${car.Year}`} />
        <Chip label={`Origin: ${car.Name}`} />
      </Paper>
    </Container>
  );
};

export default Car;
