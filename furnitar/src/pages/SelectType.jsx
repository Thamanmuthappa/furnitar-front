import { Grid } from "@mui/material";
import React from "react";
import FurnitureSelectCard from "../component/FurnitureSelectCard";
import './SelectType.css'

export default function SelectType() {
  return (
    <>
    <h1>Select Type</h1>
    <Grid container spacing={0}>
      <Grid item xs={12} md={4}>
        <FurnitureSelectCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureSelectCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureSelectCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureSelectCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureSelectCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <FurnitureSelectCard />
      </Grid>
    </Grid>
    </>
  );
}
