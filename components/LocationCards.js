import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CarouselCard from "./CarouselCard";
import { Skeleton, Typography } from "@mui/material";

const LocationCards = ({ data, error, isLoading, isError }) => {
  if (isLoading) {
    return (
      <Grid container rowSpacing={3} columnSpacing={3}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Grid key={i} item xs={12} sm={4} md={4} lg={3}>
            <Skeleton variant="rounded" height={230} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  } else if (isError) {
    return <Typography component="h3">Error Loading Hotels Found</Typography>;
  } else if (data && data?.pages && data?.pages[0].length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 400px)",
          color: (theme) => theme.palette.secondary.main,
        }}>
        <Typography component="h1">No results found !</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {data.pages.map((res, index) => (
          <React.Fragment
            key={index}
            data-testid={`data-items-location-${index}`}>
            {res?.map((location, index) => (
              <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
                <CarouselCard location={location} />
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationCards;
