import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { typography } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Cardes() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid className="main-card" item md={4}>
        <Paper
          elevation={3}
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            padding: "40px",
          }}
        >
          <Grid
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            container
          >
            <Grid style={{ textAlign: "center" }} item md={4}>
              <img
                src="https://freepngimg.com/thumb/php/2-2-php-logo-png.png"
                alt=""
                width="100%"
              />
              <Typography>$40</Typography>
              <Typography>Trending Now</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid className="main-card" item md={4}>
        <Paper
          elevation={3}
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            padding: "40px",
          }}
        >
          <Grid
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            container
          >
            <Grid style={{ textAlign: "center" }} item md={4}>
              <img
                src="https://freepngimg.com/thumb/php/2-2-php-logo-png.png"
                alt=""
                width="100%"
              />
              <Typography>$40</Typography>
              <Typography>Trending Now</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid className="main-card" item md={4}>
        <Paper
          elevation={3}
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            padding: "40px",
          }}
        >
          <Grid
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            container
          >
            <Grid style={{ textAlign: "center" }} item md={4}>
              <img
                src="https://freepngimg.com/thumb/php/2-2-php-logo-png.png"
                alt=""
                width="100%"
              />
              <Typography>$40</Typography>
              <Typography>Trending Now</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
