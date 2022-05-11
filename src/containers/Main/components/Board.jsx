import React, { memo } from 'react';
import { Grid } from '../../../components';
import Card from './Card';

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const getValue = (value) => value === undefined || value === null ? 0 : value.toLocaleString('pt-BR');

  // console.log( cases + " " + todayDeaths + " " + recovered + " " + deaths + " " + todayCases);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card value={getValue(cases)} label="Total de casos" color="#f00" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#ff0" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#00ff00" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card value={getValue(deaths)} label="Total de óbitos" color="#000" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>        
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#800080" />
      </Grid>
    </Grid>
  )
}

export default memo(Board);