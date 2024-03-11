import React, { useState, useEffect } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, Button, Grid } from '@material-ui/core';

const AddAttraction = () => {
  const [country, setCountry] = useState([]);
  const [countryid, setCountryid] = useState('');
  const [st, setSt] = useState([]);
  const [stateid, setStateid] = useState('');
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      const resCountry = await fetch("http://localhost:1234/country");
      const resCon = await resCountry.json();
      setCountry(resCon);
    }
    getCountry();
  }, []);

  const handleCountry = (event) => {
    const getCountryid = event.target.value;
    setCountryid(getCountryid);
  }

  useEffect(() => {
    const getState = async () => {
      const resState = await fetch(`http://localhost:1234/state/${countryid}`);
      const resSt = await resState.json();
      setSt(resSt);
    }
    if (countryid !== '') {
      getState();
    }
  }, [countryid]);

  const handleState = (event) => {
    const getStateid = event.target.value;
    setStateid(getStateid);
  }

  useEffect(() => {
    const getCity = async () => {
      const resCity = await fetch(`http://localhost:1234/city/${stateid}`);
      const resCityData = await resCity.json();
      console.log("Fetched city data:", resCityData); // Log fetched city data
      setCity(resCityData);
    }
    if (stateid !== '') {
      getCity();
    }
  }, [stateid]);

  return (
    <Container className="content">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 className="mt-4 mb-4 fw-bold">Select Country, State, and City</h2>
          <form className="row g-3">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={countryid}
                    onChange={handleCountry}
                  >
                    <MenuItem value="">--Select Country--</MenuItem>
                    {country.map((getCon, index) => (
                      <MenuItem key={index} value={getCon.country_id}>{getCon.country_name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel>State</InputLabel>
                  <Select
                    value={stateid}
                    onChange={handleState}
                  >
                    <MenuItem value="">--Select State--</MenuItem>
                    {st.map((getSt, index) => (
                      <MenuItem key={index} value={getSt.state_id}>{getSt.state_name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel>City</InputLabel>
                  <Select
                    value=""
                  >
                    <MenuItem value="">--Select City--</MenuItem>
                    {city.map((getCity, index) => (
                      <MenuItem key={index} value={getCity.city_id}>{getCity.city_name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <Button variant="contained" color="primary" className="mt-4">Submit</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddAttraction;
