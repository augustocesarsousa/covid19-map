import React, { memo } from 'react'
// import { Grid, Skeleton } from '../../../components'
import { Grid } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  // const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card value={cases} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card value={todayDeaths} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card value={todayCases} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card value={deaths} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card value={recovered} label="Total de recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board);