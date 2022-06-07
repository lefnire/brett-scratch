import React, {useState, useEffect} from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BasicSelectProps {
  id: string
  label: string
  item: any
  setItem: any
  options: {value: string, label: string}[]
  form: any
}

function BasicSelect({id, form, label, item, setItem, options}: BasicSelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setItem({
      ...form,
      [id]: value
    })
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId={id}
          id={id}
          value={item}
          label={label}
          onChange={handleChange}
        >
          {options.map(option => <MenuItem value={option.value}>{option.label}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}

const fakeInstances = [
  {
    instanceId: 'abc',
    instanceType: 'g5.2xlarge',
    storage: 512,
    spot: true,
    region: 'us-west-2',
    dateCreated: '2022-05-20'
  },
  {
    instanceId: '123',
    instanceType: 'g5.2xlarge',
    storage: 384,
    spot: true,
    region: 'us-east-1',
    dateCreated: '2022-05-23'
  },
]

export default function Instances() {
  const [creating, setCreating] = useState(false)
  const [form, setForm] = useState({
    instanceType: 'g2.2xlarge',
    storage: "512",
    spot: false,
    region: 'us-east-1',
  })

  const instanceTypes = [
    {value: 'g2.2xlarge', label: 'g2.2xlarge'},
    {value: 'g2.xlarge', label: 'g2.xlarge'},
    {value: 'p2.xlarge', label: 'p2.xlarge'},
  ]

  function changeText(event: any) {
    const id = event.target.id
    const value = event.target.value
    setForm({
      ...form,
      [id]: value
    })
  }

  if (creating) {
    return <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <BasicSelect
          form={form}
          id="instanceType"
          label="Instance Type"
          item={form.instanceType}
          setItem={setForm}
          options={instanceTypes}
        />
        {/*<TextField id="instanceType" label="Instance Type" variant="outlined" />*/}
        <TextField
          id="storage"
          label="Storage"
          variant="outlined"
          value={form.storage}
          onChange={changeText}
        />
        <TextField
          id="spot"
          label="Spot"
          variant="outlined"
          onChange={changeText}
        />
        <TextField
          id="region"
          label="Region"
          variant="outlined"
          onChange={changeText}
        />
        <Button
          variant="contained"
          onClick={() => {setCreating(!creating)}}
        >Save</Button>
      </Box>
    </div>
  }

  return <div>

    <Button
      variant="contained"
      onClick={() => {setCreating(!creating)}}
    >Create Instance</Button>

    {fakeInstances.map((instance, index) => <>
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
          {/*<Typography sx={{ mb: 1.5 }} color="text.secondary">*/}
          {/*  adjective*/}
          {/*</Typography>*/}
          {/*<Typography variant="body2">*/}
          {/*  well meaning and kindly.*/}
          {/*  <br />*/}
          {/*  {'"a benevolent smile"'}*/}
          {/*</Typography>*/}
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