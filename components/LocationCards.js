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
    return <Typography component="h3"> Error Loading Hotels Found</Typography>;
    // line for testing  return <div data-testid="location-cards-is-error">{String(isError)}</div>
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {data &&
          data.pages.map((res, index) => {
            return (
              <React.Fragment
                key={index}
                data-testid={`data-items-location-${index}`}
              >
                {res?.map((location, index) => {
                  return (
                    <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
                      <CarouselCard location={location} />
                    </Grid>
                  );
                })}
              </React.Fragment>
            );
          })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
