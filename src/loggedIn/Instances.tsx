import React, {useState, useEffect} from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface Props {
  instances: any
}

export default function Instances({instances}: Props) {
  return <div>
    <Button
      variant="contained"
      href="/new"
    >
      Create Instance
    </Button>

    {instances.map((instance: any, index: number) => <>
      <Card sx={{minWidth: 275, mb: 2}}>
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            {instance.instanceId}
          </Typography>
          <Typography variant="h5" component="div">
            {instance.dateCreated}
          </Typography>
          <Typography variant="h5" component="div">
            {instance.storage}
          </Typography>
          <Typography variant="h5" component="div">
            {instance.region}
          </Typography>
        </CardContent>
        <CardActions>
          <>
            <Button size="small">Manage</Button>
            {/* manage = take a snapshot | delete | share */}
          </>
        </CardActions>
      </Card>
    </>)}
  </div>
}